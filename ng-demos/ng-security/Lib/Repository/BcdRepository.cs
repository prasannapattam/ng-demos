using ng_security.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using ng_security.Lib.Shared;
using System.Web.Mvc;

namespace ng_security.Lib.Repository
{
    public static class BcdRepository
    {
        public static ProfileModel ProfileGet(LoginModel login)
        {
            return new ProfileModel();
        }

    }
}



