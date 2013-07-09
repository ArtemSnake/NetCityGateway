using System.Web.Mvc;

namespace Gate.Controllers
{
    public class HomeController : Controller
    {
	#region .ctors
		public HomeController()
		{
		}
	#endregion
        public ActionResult Index()
        {
            return View();
        }

		public ActionResult Methods()
		{
			return View();
		}

		[HttpPost]
		public PartialViewResult GetResponse(int methodId)
		{
			return PartialView("GetResponse","Heeloo Kitty");
		}

		[HttpPost]
		public PartialViewResult Test()
		{
			return PartialView();
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
