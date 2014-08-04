using ng_interceptor.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ng_interceptor.Controllers
{
    public class ContactController : ApiController
    {
        public AjaxModel<ContactModel> Get()
        {

            throw new ApplicationException("Exception");

            ContactModel model = new ContactModel()
            {
                ContactID = 26,
                FirstName = "Prakul",
                LastName = "Pattam"
            };

            return new AjaxModel<ContactModel>() { Success = true, Message = "", Model = model };
        }

        public bool Post(ContactModel contact)
        {
            return true;
        }
    }
}
