using ng_security.Lib.Repository;
using ng_security.Lib.Shared;
using ng_security.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ng_security.Controllers
{
    public class DashboardController : ApiController
    {
        public AjaxModel<string> Get()
        {
            AjaxModel<string> ajax = null;

            try
            {
                ajax = new AjaxModel<string>() { Success = true, Message = "" , Model = "Returned from API" };
            }
            catch(Exception exp)
            {
                ajax = new AjaxModel<string>() { Success = false, Message = exp.Message, Model = null };
            }



            return ajax;
        }
    }
}
