using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Gate
{
	public enum Method
	{
		Test = 0,
		GetTimeTable = 1,
		GetHomeWork = 2,
		GetClasses = 3,
		GetEducationalInstitutions = 4,
		GetAnnouncement = 5
	}

	public enum ResponseRype
	{
		Ok = 0,
		/// <summary>
		/// Указывает, что припопытке получить данные произошла ошибка
		/// </summary>
		Error = 1,
		/// <summary>
		/// Указывает, что текст присланный в поле ResponseAddInfo объекта 
		/// GatewayResponse, пользователю необходимо показать все зависимости есть 
		/// данные или нет.
		/// </summary>
		Warning = 2,
		/// <summary>
		/// Указывает, что при разборе запроса обнаруженны не корректные параметры.
		/// Является частным случаем Warning.
		/// </summary>
		InvadParam = 3,
	}
}