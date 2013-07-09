$(document).ready(function () {
    $("#methodSelect").change(function () {
        var methodId = $("#methodSelect").val();
        var versnSelectEl = $("#versionSelect");
        var versCount = versnSelectEl.children().length;//GET <option></option> LIST
        switch (methodId) {
            case "0":
                $("#Main").attr("action", "/Home/Test");
                $("#parameters_container").empty();
                $("#educInst_container").empty();
                $("#class_container").empty();
                $("#date_container").empty();
                $("#endDate_container").empty();
                $("#room_container").empty();
                $("#teacher_container").empty();
                $("#subShort_container").empty();
                $("#educFilter_container").empty();
                if (versCount > 1) {
                    versnSelectEl.empty();
                    var availableVersn = HtmlHelper.getElement("option", { "value": "0"},"1");//for test method available 1 versn method.
                    versnSelectEl.append(availableVersn);
                }
                break;
            case "1":
                $("#Main").attr("action", "/Home/GetTimeTable");
                $("#room_container").empty();
                $("#teacher_container").empty();
                $("#subShort_container").empty();
                $("#educFilter_container").empty();
                if (versCount != 3) {
                    versnSelectEl.empty();
                    var versnArr = [
                        HtmlHelper.getElement("option", { "value": "0" }, "1"),
                        HtmlHelper.getElement("option", { "value": "1" }, "2"),
                        HtmlHelper.getElement("option", { "value": "2" }, "3")
                    ];
                    for (var i = 0; i < versnArr.length; i++) {
                        versnSelectEl.append(versnArr[i]);
                    }
                }
                if ($("#parameters").length != 1) {
	                RenderFormHelper.renderParameterContainer_content();
                }
                if ($("#educInst").length != 1) {
	                RenderFormHelper.renderEducInstContainer_content();
                }
                if ($("#class").length != 1) {
                	RenderFormHelper.renderClassContainer_content();
                }
                if ($("#date").length != 1) {
                    RenderFormHelper.renderDateContainer_content();
                    $("#date").datepicker({
                        format: 'dd.mm.yyyy'
                    }).on('changeDate', function (ev) {
                        $("#date").datepicker('hide');
                    });
                }
                if ($("#endDate").length != 1) {
                    RenderFormHelper.renderEndDateDateContainer_content();
                    $("#endDate").datepicker({
                        format: 'dd.mm.yyyy'
                    }).on('changeDate', function (ev) {
                        $("#endDate").datepicker('hide');
                    });
                }
                break;
            case "2":
                $("#Main").attr("action", "/Home/GetHomeWork");
                $("#room_container").empty();
                $("#teacher_container").empty();
                $("#educFilter_container").empty();
                if (versCount > 1) {
                    versnSelectEl.empty();
                    var availableVersn = HtmlHelper.getElement("option", { "value": "0" }, "1");//for test method available 1 versn method.
                    versnSelectEl.append(availableVersn);
                }
                if ($("#parameters").length != 1) {
                    RenderFormHelper.renderParameterContainer_content();
                }
                if ($("#educInst").length != 1) {
                    RenderFormHelper.renderEducInstContainer_content();
                }
                if ($("#class").length != 1) {
                    RenderFormHelper.renderClassContainer_content();
                }
                if ($("#date").length != 1) {
                    RenderFormHelper.renderDateContainer_content();
                    $("#date").datepicker({
                        format: 'dd.mm.yyyy'
                    }).on('changeDate', function (ev) {
                        $("#date").datepicker('hide');
                    });
                }
                if ($("#endDate").length != 1) {
                    RenderFormHelper.renderEndDateDateContainer_content();
                    $("#endDate").datepicker({
                        format: 'dd.mm.yyyy'
                    }).on('changeDate', function (ev) {
                        $("#endDate").datepicker('hide');
                    });
                }
                if ($("#subShort").length != 1) {
                    RenderFormHelper.renderSubShortContainer_content();
                }
                break;
            case "3":
                $("#Main").attr("action", "/Home/GetClasses");
                $("#class_container").empty();
                $("#date_container").empty();
                $("#endDate_container").empty();
                $("#room_container").empty();
                $("#teacher_container").empty();
                $("#subShort_container").empty();
                $("#educFilter_container").empty();
                if (versCount > 1) {
                    versnSelectEl.empty();
                    var availableVersn = HtmlHelper.getElement("option", { "value": "0" }, "1");//for test method available 1 versn method.
                    versnSelectEl.append(availableVersn);
                }
                if ($("#parameters").length != 1) {
                    RenderFormHelper.renderParameterContainer_content();
                }
                if ($("#educInst").length != 1) {
                    RenderFormHelper.renderEducInstContainer_content();
                }
                break;
            case "4":
                $("#Main").attr("action", "/Home/GetEducationalInstitutions");
                $("#parameters_container").empty();
                $("#educInst_container").empty();
                $("#class_container").empty();
                $("#date_container").empty();
                $("#endDate_container").empty();
                $("#room_container").empty();
                $("#teacher_container").empty();
                $("#subShort_container").empty();
                $("#educFilter_container").empty();
                if (versCount != 2) {
                    versnSelectEl.empty();
                    var versnArr = [
                        HtmlHelper.getElement("option", { "value": "0" }, "1"),
                        HtmlHelper.getElement("option", { "value": "1" }, "2")
                    ];
                    for (var i = 0; i < versnArr.length; i++) {
                        versnSelectEl.append(versnArr[i]);
                    }
                }
                break;
            case "5":
                $("#Main").attr("action", "/Home/GetAnnouncement");
                $("#parameters_container").empty();
                $("#class_container").empty();
                $("#endDate_container").empty();
                $("#room_container").empty();
                $("#teacher_container").empty();
                $("#subShort_container").empty();
                $("#educFilter_container").empty();
                if (versCount > 1) {
                    versnSelectEl.empty();
                    var availableVersn = HtmlHelper.getElement("option", { "value": "0" }, "1");//for test method available 1 versn method.
                    versnSelectEl.append(availableVersn);
                }
                if ($("#educInst").length != 1) {
                    RenderFormHelper.renderEducInstContainer_content();
                }
                if ($("#date").length != 1) {
                    RenderFormHelper.renderDateContainer_content();
                    $("#date").datepicker({
                        format: 'dd.mm.yyyy'
                    }).on('changeDate', function (ev) {
                        $("#date").datepicker('hide');
                    });
                }
                break;
            default:
                    
                break;
        }
    });

    $("#versionSelect").change(function () {
        var methodId = $("#methodSelect").val();
        var versnId = $("#versionSelect").val();
        switch (methodId) {
            case "1":
                if (versnId == 0 || versnId == 2) {
                    $("#room_container").empty();
                    $("#teacher_container").empty();
                }
                if (versnId == 1) {
                    if ($("#room").length != 1) {
                        RenderFormHelper.renderRoomContainer_content();
                    }
                    if ($("#teacher").length != 1) {
                        RenderFormHelper.renderTeacherContainer_content();
                    }
                }
                break;
            case "4":
                if (versnId == 0) {
                    $("#parameters_container").empty();
                    $("#educFilter_container").empty();
                } else {
                    if ($("#educFilter").length != 1) {
                        RenderFormHelper.renderEducFilterContainer_content();
                    }
                    if ($("#parameters").length != 1) {
                        RenderFormHelper.renderParameterContainer_content();
                    }
                }
                break;
        default:
        }
    });

    $("#responseFormatSelect").change(function() {
        var responseFormatId = $("#responseFormatSelect").val();
        if (responseFormatId == 0) {
            $("#dateFormatSelect_container").empty();
        } else {
            if ($("#dateFormatSelect").length != 1) {
                RenderFormHelper.renderDateFormatContainer_content();
            }
        }
    });
});