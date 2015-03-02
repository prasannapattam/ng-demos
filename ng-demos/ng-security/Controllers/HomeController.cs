using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ng_security.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.AppTitle = "ng-Security Demo";

            string virtualDirectory = Url.Content("~");
            if (virtualDirectory.Substring(virtualDirectory.Length - 1) == "/") //removing the last slash
                virtualDirectory = virtualDirectory.Substring(0, virtualDirectory.Length - 1);
            ViewBag.VirtualDirectory = virtualDirectory;
            string environment = System.Web.Configuration.WebConfigurationManager.AppSettings["Environment"];
            if (environment.ToLower() == "dev")
                ViewBag.UserAuthenticated = "true";
            else
                ViewBag.UserAuthenticated = "false";
            return View();
        }
    }
}
