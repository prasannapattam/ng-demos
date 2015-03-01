using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ng_security.Models
{
    public class ProfileModel
    {
        public int UserID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string PhotoUrl { get; set; }
    }
}