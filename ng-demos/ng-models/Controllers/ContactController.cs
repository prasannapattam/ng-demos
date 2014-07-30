using ng_models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ng_models.Controllers
{
    public class ContactController : ApiController
    {
        public ContactModel Get()
        {
            return new ContactModel()
            {
                ContactID = 26,
                FirstName = "Prakul",
                LastName = "Pattam"
            };
        }

        public bool Post(ContactModel contact)
        {
            return true;
        }
    }
}
