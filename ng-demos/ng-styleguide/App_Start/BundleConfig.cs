using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace ng_styleguide
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            //including all the libraries used in our app such as angular
            bundles.Add(
                new ScriptBundle("~/scripts/libraries")
                    .Include("~/scripts/angular/angular.js")
                    .Include("~/scripts/angular/angular-route.js")
                    .Include("~/scripts/angular/angular-resource.js")
                    .Include("~/scripts/bootstrap.js")
                    .Include("~/scripts/jquery.js")
                    .Include("~/scripts/kendo/kendo.ui.core.js")
                );

            //including all the css used in our app
            bundles.Add(
                new StyleBundle("~/content/css")
                    .Include("~/content/bootstrap/bootstrap.css")
                    .Include("~/content/bootstrap/bootstrap-theme.css")
                    .Include("~/content/kendo/kendo.common.css")
                    .Include("~/content/kendo/kendo.blueopal.css")
                    .Include("~/content/app.css")
                );

            //including the javascript files in our app
            bundles.Add(
                new ScriptBundle("~/scripts/app")
                    .Include("~/app/app.js")
                    .IncludeDirectory("~/app", "*.js", true)
                );
        }
    }
}