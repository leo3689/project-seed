package com.yupaits.auth.vo;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.yupaits.commons.core.serializer.LongSerializer;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * <p>
 * 部门VO
 * </p>
 *
 * @author yupaits
 * @date 2018-11-05
 */
@Data
@ApiModel(value = "DepartmentVO", description = "DepartmentVO对象")
public class DepartmentVO implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "部门ID")
    @JsonSerialize(using = LongSerializer.class)
    private Long id;

    @ApiModelProperty(value = "部门Key")
    private String departmentKey;

    @ApiModelProperty(value = "部门名称")
    private String name;

    @ApiModelProperty(value = "父级部门ID")
    @JsonSerialize(using = LongSerializer.class)
    private Long parentId;

    @ApiModelProperty(value = "创建时间")
    private LocalDateTime createdAt;

    @ApiModelProperty(value = "创建人ID")
    @JsonSerialize(using = LongSerializer.class)
    private Long createdBy;

    @ApiModelProperty(value = "更新时间")
    private LocalDateTime updatedAt;

    @ApiModelProperty(value = "更新人ID")
    @JsonSerialize(using = LongSerializer.class)
    private Long updatedBy;
}
