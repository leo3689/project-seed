package com.yupaits.auth.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yupaits.auth.dto.PrivilegeCreate;
import com.yupaits.auth.dto.PrivilegeUpdate;
import com.yupaits.auth.entity.Privilege;
import com.yupaits.auth.entity.RolePrivilege;
import com.yupaits.auth.service.IPrivilegeService;
import com.yupaits.auth.service.IRolePrivilegeService;
import com.yupaits.auth.vo.PrivilegeVO;
import com.yupaits.commons.result.Result;
import com.yupaits.commons.result.ResultCode;
import com.yupaits.commons.result.ResultWrapper;
import com.yupaits.commons.utils.ValidateUtils;
import io.swagger.annotations.*;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.MapUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


/**
 * <p>
 * 权限 前端控制器
 * </p>
 *
 * @author yupaits
 * @since 2018-10-31
 */
@Slf4j
@Api(tags = "权限接口")
@RestController
@RequestMapping("/auth/privilege")
public class PrivilegeController {

    private final IPrivilegeService privilegeService;
    private final IRolePrivilegeService rolePrivilegeService;

    @Autowired
    public PrivilegeController(IPrivilegeService privilegeService, IRolePrivilegeService rolePrivilegeService) {
        this.privilegeService = privilegeService;
        this.rolePrivilegeService = rolePrivilegeService;
    }

    @ApiOperation("创建权限")
    @PostMapping("")
    public Result addPrivilege(@RequestBody PrivilegeCreate privilegeCreate) {
        if (!privilegeCreate.isValid()) {
            return ResultWrapper.fail(ResultCode.PARAMS_ERROR);
        }
        if (privilegeService.count(new QueryWrapper<Privilege>().eq("privilege_key", privilegeCreate.getPrivilegeKey())) > 0) {
            return ResultWrapper.fail(ResultCode.DATA_CONFLICT);
        }
        Privilege privilege = new Privilege();
        BeanUtils.copyProperties(privilegeCreate, privilege);
        return privilegeService.save(privilege) ? ResultWrapper.success() : ResultWrapper.fail(ResultCode.CREATE_FAIL);
    }

    @ApiOperation("编辑权限")
    @PutMapping("/{id:\\d{19}}")
    public Result updatePrivilege(@RequestBody PrivilegeUpdate privilegeUpdate) {
        if (!privilegeUpdate.isValid()) {
            return ResultWrapper.fail(ResultCode.PARAMS_ERROR);
        }
        if (privilegeService.count(new QueryWrapper<Privilege>().eq("privilege_key", privilegeUpdate.getPrivilegeKey())) > 0) {
            return ResultWrapper.fail(ResultCode.DATA_CONFLICT);
        }
        Privilege privilege = new Privilege();
        BeanUtils.copyProperties(privilegeUpdate, privilege);
        return privilegeService.updateById(privilege) ? ResultWrapper.success() : ResultWrapper.fail(ResultCode.UPDATE_FAIL);
    }

    @ApiOperation("批量保存权限")
    @PutMapping("/batch-save")
    public Result batchSavePrivilege(@RequestBody List<PrivilegeUpdate> privilegeUpdateList) {
        if (!PrivilegeUpdate.isValid(privilegeUpdateList)) {
            return ResultWrapper.fail(ResultCode.PARAMS_ERROR);
        }
        List<Privilege> privilegeList = privilegeUpdateList.stream().map(privilegeUpdate -> {
            Privilege privilege = new Privilege();
            BeanUtils.copyProperties(privilegeUpdate, privilege);
            return privilege;
        }).collect(Collectors.toList());
        return privilegeService.saveOrUpdateBatch(privilegeList) ? ResultWrapper.success() : ResultWrapper.fail(ResultCode.SAVE_FAIL);
    }

    @ApiOperation("根据ID删除权限")
    @DeleteMapping("/{id:\\d{19}}")
    public Result deletePrivilege(@PathVariable Long id) {
        if (!ValidateUtils.idValid(id)) {
            return ResultWrapper.fail(ResultCode.PARAMS_ERROR);
        }
        if (privilegeService.removeById(id)) {
            rolePrivilegeService.remove(new QueryWrapper<RolePrivilege>().eq("privilege_id", id));
            ResultWrapper.success();
        }
        return ResultWrapper.fail(ResultCode.DELETE_FAIL);
    }

    @ApiOperation("批量删除权限")
    @PutMapping("/batch-delete")
    public Result batchDeletePrivilege(@RequestBody List<Long> ids) {
        if (CollectionUtils.isEmpty(ids)) {
            return ResultWrapper.fail(ResultCode.PARAMS_ERROR);
        }
        if (privilegeService.removeByIds(ids)) {
            rolePrivilegeService.remove(new QueryWrapper<RolePrivilege>().in("privilege_id", ids));
            ResultWrapper.success();
        }
        return ResultWrapper.fail(ResultCode.DELETE_FAIL);
    }

    @ApiOperation("根据ID获取权限信息")
    @GetMapping("/{id:\\d{19}}")
    public Result getPrivilege(@PathVariable Long id) {
        if (!ValidateUtils.idValid(id)) {
            return ResultWrapper.fail(ResultCode.PARAMS_ERROR);
        }
        Privilege privilege = privilegeService.getById(id);
        if (privilege == null) {
            return ResultWrapper.fail(ResultCode.DATA_NOT_FOUND);
        }
        PrivilegeVO privilegeVO = new PrivilegeVO();
        BeanUtils.copyProperties(privilege, privilegeVO);
        return ResultWrapper.success(privilegeVO);
    }

    @ApiOperation("按条件获取权限列表")
    @PostMapping("/list")
    public Result getPrivilegeList(@RequestBody(required = false) Map<String, Object> query) {
        QueryWrapper<Privilege> queryWrapper = new QueryWrapper<>();
        if (MapUtils.isNotEmpty(query)) {
            query.forEach((key, value) -> {
                //TODO 设置查询条件
            });
        }
        List<PrivilegeVO> privilegeVOList = privilegeService.list(queryWrapper).stream().map(privilege -> {
            PrivilegeVO privilegeVO = new PrivilegeVO();
            BeanUtils.copyProperties(privilege, privilegeVO);
            return privilegeVO;
        }).collect(Collectors.toList());
        return ResultWrapper.success(privilegeVOList);
    }

    @ApiOperation("获取权限分页信息")
    @ApiImplicitParams({@ApiImplicitParam(name = "page", value = "当前页码", defaultValue = "1", dataType = "int", paramType = "query"),
            @ApiImplicitParam(name = "size", value = "每页数量", defaultValue = "10", dataType = "int", paramType = "query")})
    @PostMapping("/page")
    public Result getPrivilegePage(@RequestParam(required = false, defaultValue = "1") int page,
                              @RequestParam(required = false, defaultValue = "10") int size,
                              @RequestParam(required = false) @ApiParam(value = "降序字段") List<String> descs,
                              @RequestParam(required = false) @ApiParam(value = "升序字段") List<String> ascs,
                              @RequestBody(required = false) Map<String, Object> query) {
        Page<Privilege> pager = new Page<>(page, size);
        if (CollectionUtils.isNotEmpty(descs)) {
            pager.setDescs(descs);
        }
        if (CollectionUtils.isNotEmpty(ascs)) {
            pager.setAscs(ascs);
        }
        QueryWrapper<Privilege> queryWrapper = new QueryWrapper<>();
        if (MapUtils.isNotEmpty(query)) {
            query.forEach((key, value) -> {
                //TODO 设置查询条件
            });
        }
        IPage<PrivilegeVO> privilegeVOPage = new Page<>();
        BeanUtils.copyProperties(privilegeService.page(pager, queryWrapper), privilegeVOPage);
        privilegeVOPage.setRecords(pager.getRecords().stream().map(privilege -> {
            PrivilegeVO privilegeVO = new PrivilegeVO();
            BeanUtils.copyProperties(privilege, privilegeVO);
            return privilegeVO;
        }).collect(Collectors.toList()));
        return ResultWrapper.success(privilegeVOPage);
    }

}