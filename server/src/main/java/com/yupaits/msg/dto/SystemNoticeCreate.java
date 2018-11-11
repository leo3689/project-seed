package com.yupaits.msg.dto;

import com.yupaits.commons.consts.enums.MsgLevel;
import com.yupaits.commons.core.BaseDTO;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

/**
 * <p>
 * SystemNoticeCreate
 * </p>
 *
 * @author yupaits
 * @date 2018-11-08
 */
@Data
@EqualsAndHashCode(callSuper = false)
@ApiModel(value = "SystemNoticeCreate", description = "SystemNoticeCreate对象")
public class SystemNoticeCreate extends BaseDTO {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "公告等级", required = true)
    private MsgLevel msgLevel;

    @ApiModelProperty(value = "公告内容", required = true)
    private String msgContent;

    @ApiModelProperty(value = "开始时间", required = true)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime startTime;

    @ApiModelProperty(value = "结束时间", required = true)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime endTime;

    @Override
    @ApiModelProperty(hidden = true)
    public boolean isValid() {
        return true;
    }

}