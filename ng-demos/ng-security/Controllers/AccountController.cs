using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.Mvc;

namespace ng_security.Controllers
{
    [AllowAnonymous]
    public class AccountController : Controller
    {
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(string UserName, string UserPassword)
        {
            if (UserName == "prasanna" && UserPassword == "prasanna")
            {
                FormsAuthentication.SetAuthCookie(UserName, true);
                return RedirectToAction("Index", "Home");
            }
            return View();
        }
    }
}
