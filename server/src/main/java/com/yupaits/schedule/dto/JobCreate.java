package com.yupaits.schedule.dto;

import com.yupaits.commons.core.BaseDTO;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.apache.commons.lang3.StringUtils;

/**
 * <p>
 * JobCreate
 * </p>
 *
 * @author yupaits
 * @date 2018-11-03
 */
@Data
@EqualsAndHashCode(callSuper = false)
@ApiModel(value = "JobCreate", description = "JobCreate对象")
public class JobCreate extends BaseDTO {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "任务执行类路径", required = true)
    private String className;

    @ApiModelProperty(value = "CRON表达式", required = true)
    private String cronExpression;

    @ApiModelProperty(value = "任务名称", required = true)
    private String jobName;

    @ApiModelProperty(value = "任务组", required = true)
    private String jobGroup;

    @ApiModelProperty(value = "触发器名称", required = true)
    private String triggerName;

    @ApiModelProperty(value = "触发器组", required = true)
    private String triggerGroup;

    @ApiModelProperty(value = "已暂停")
    private boolean paused;

    @ApiModelProperty(value = "定时任务描述")
    private String description;

    @Override
    @ApiModelProperty(hidden = true)
    public boolean isValid() {
        if (StringUtils.isBlank(className)) {
            return false;
        }
        try {
            Class.forName(className);
            return !StringUtils.isAnyBlank(cronExpression, jobName, jobGroup, triggerName, triggerGroup);
        } catch (ClassNotFoundException e) {
            return false;
        }
    }

}
