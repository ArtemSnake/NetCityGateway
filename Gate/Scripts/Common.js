HtmlHelper = {
	getElement: function (elType, htmlAttr, text) {
		var element;
		switch (elType) {
			case "input":
				element = $("<input />");
				break;
			case "label":
				element = $("<label>");
				break;
			case "option":
				element = $("<option></option>");
				break;
			case "div":
				element = $("<div></div>");
				break;
			case "small":
				element = $("<small></small>");
				break;
			case "span":
				element = $("<span></span>");
				break;
			default:
				break;
		}
		if (htmlAttr != null) {
			for (var atrb in htmlAttr) {
				element.attr(atrb, htmlAttr[atrb]);
			}
		}
		if (text != undefined) {
			element.html(text);
		}
		return element;
	}
};

FilterCreator = {
	getContentInputFilter: function(id, title,helpText) {
		var label = HtmlHelper.getElement("label", { "class": "control-label", "for": id }, title);
		var controlsDiv = HtmlHelper.getElement("div", { "class": "controls" });
		var helpSpan = HtmlHelper.getElement("span", { "class": "help-block" });
		var small = HtmlHelper.getElement("small", null, helpText);
		var input = HtmlHelper.getElement("input", { "id": id, "name": id, "type": "text", "required":"true"});
		helpSpan.append(small);//<span><small>...</small></span>
		controlsDiv.append(input);
		controlsDiv.append(helpSpan);
		return [label, controlsDiv];
	}
};

RenderFormHelper = {
	renderParameterContainer_content: function() {
		var parametersLabel = HtmlHelper.getElement("label", { "class": "control-label", "id": "parameters" }, "Параметры метода:");
		$("#parameters_container").append(parametersLabel);
	},
	renderEducInstContainer_content: function () {
		var content = FilterCreator.getContentInputFilter("educInst", "educInst:", "Идентификатор образовательного учреждения");
		for (var i = 0; i < content.length;i++)
		{
			$("#educInst_container").append(content[i]);
		}
	},
	renderClassContainer_content: function () {
		var content = FilterCreator.getContentInputFilter("class", "class:", "Класс или список классов через запятую:");
		for (var i = 0; i < content.length; i++) {
			$("#class_container").append(content[i]);
		}
	},
	renderDateContainer_content: function () {
		var content = FilterCreator.getContentInputFilter("date", "date:", "Дата начала:");
		for (var i = 0; i < content.length; i++) {
			$("#date_container").append(content[i]);
		}
	},
	renderEndDateDateContainer_content: function () {
		var content = FilterCreator.getContentInputFilter("endDate", "endDate:", "Дата окончания:");
		for (var i = 0; i < content.length; i++) {
			$("#endDate_container").append(content[i]);
		}
	},
	renderSubShortContainer_content: function() {
	    var content = FilterCreator.getContentInputFilter("subShort", "subShort:", "Сокращенное название предметов.0-полное название, 1-сокращенное");
	    for (var i = 0; i < content.length; i++) {
	        $("#subShort_container").append(content[i]);
	    }
	},
	renderRoomContainer_content: function() {
	    var content = FilterCreator.getContentInputFilter("room", "room:", "Признак вывода номера кабинета, 1 - кабинеты выводятся, 0 - нет");
	    for (var i = 0; i < content.length; i++) {
	        $("#room_container").append(content[i]);
	    }
	},
	renderTeacherContainer_content: function () {
	    var content = FilterCreator.getContentInputFilter("teacher", "teacher:", "Признак вывода ФИО преподавателя, 1 - ФИО выводится, 0 - нет");
	    for (var i = 0; i < content.length; i++) {
	        $("#teacher_container").append(content[i]);
	    }
	},
	renderEducFilterContainer_content: function() {
	    var content = FilterCreator.getContentInputFilter("educFilter", "educFilter:", "Фильтр названия образовательного учреждения");
	    for (var i = 0; i < content.length; i++) {
	        $("#educFilter_container").append(content[i]);
	    }
	},
    renderDateFormatContainer_content: function() {
        var content = FilterCreator.getContentInputFilter("dateFormatSelect", "Формат даты:", "");
        for (var i = 0; i < content.length; i++) {
            $("#dateFormatSelect_container").append(content[i]);
        }
    }
};