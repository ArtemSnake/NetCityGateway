using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Gate.Models;
using Version = Gate.Models.Version;

namespace Gate.Controllers
{
    public class HomeController : Controller
    {
	    private readonly List<Method> _methods;
	    private readonly List<Version> _versions;
	    private readonly List<ResponseFormat> _responseFormats;
	#region .ctors
		public HomeController()
		{
			_methods = new List<Method>()
				           {
					           new Method(){Name = "Test",Value = (int) MethodValues.Test,Legend = Common.Test_Legend,Selected = true},
					           new Method(){Name = "GetTimeTable",Value = (int) MethodValues.GetTimeTable,Legend = Common.GetTimeTable_Legend},
					           new Method(){Name = "GetHomeWork", Value = (int) MethodValues.GetHomeWork,Legend = Common.GetHomeWork_Legend},
					           new Method(){Name = "GetClasses",Value = (int) MethodValues.GetClasses,Legend = Common.GetClasses_Legend},
					           new Method(){Name = "GetEducationalInstitutions",Value = (int) MethodValues.GetEducationalInstitutions,Legend = Common.GetEducationalInstitutions_Legend},
					           new Method(){Name = "GetAnnouncement",Value = (int) MethodValues.GetAnnouncement, Legend = Common.GetAnnouncement_Legend}
				           };
			_versions = new List<Version>()
				            {
					            new Version(){Name = 1,Value = 0,Selected = true}
				            };
			_responseFormats = new List<ResponseFormat>()
				           {
					            new ResponseFormat() { Name = "XML",Value = 0,Selected = true},
								new ResponseFormat(){Name = "JSON",Value = 1}
				           };
		}
	#endregion
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

		public ActionResult Methods()
		{
			return View();
		}

		/// <summary>
		/// Render Menu
		/// </summary>
		/// <returns></returns>
		public PartialViewResult Menu()
		{
			return PartialView();
		}

    }
}
