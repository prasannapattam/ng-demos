using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace ng_security
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            //ignoring the bundle list
            bundles.IgnoreList.Clear();

            //including all the libraries used in our app such as angular
            bundles.Add(
                new ScriptBundle("~/scripts/libraries")
                    .Include("~/scripts/jquery.js")
                    .Include("~/scripts/angular/angular.js")
                    .Include("~/scripts/angular/angular-ui-router.js")
                    .Include("~/scripts/angular/angular-messages.js")
                    .Include("~/scripts/angular/angular-animate.js")
                    .Include("~/scripts/angular/angular-aria.js")
                    .Include("~/scripts/angular/hammer.js")
                    .Include("~/scripts/angular/angular-material.js")
                    .Include("~/scripts/bootstrap.js")
                    .Include("~/scripts/kendo/kendo.ui.core.js")
                    .Include("~/scripts/kendo/kendo.autocomplete.js")
                    .Include("~/scripts/kendo/kendo.menu.js")
                    .Include("~/scripts/kendo/kendo.window.js")
                    .Include("~/scripts/kendo/kendo.angular.js")
                    .Include("~/scripts/ui-grid.js")
                    .Include("~/scripts/toastr.js")
                    .Include("~/scripts/moment.js")
                    .Include("~/scripts/ui-bootstrap-tpls-0.11.2.js")
                    .Include("~/scripts/jquery.textcomplete.js")
                    .Include("~/scripts/xeditable.js")
                );

            //including all the css used in our app
            bundles.Add(
                new StyleBundle("~/content/css")
                    .Include("~/content/bootstrap/bootstrap.css")
                    .Include("~/content/bootstrap/bootstrap-theme.css")
                    .Include("~/content/kendo/kendo.common.core.css")
                    .Include("~/content/kendo/kendo.uniform.css")
                    .Include("~/content/ui-grid/ui-grid.css")
                    .Include("~/content/toastr.css")
                    .Include("~/content/angular-material.css")
                    .Include("~/content/angular-material-grey-theme.css")
                    .Include("~/content/xeditable.css")
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