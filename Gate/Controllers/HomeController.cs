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
		public PartialViewResult GetResponse()
		{
			return PartialView("GetResponse","Heeloo Kitty");
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
