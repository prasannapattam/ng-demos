'use strict'

angular.module('appinterceptors').factory('contactService', contactService);

contactService.$inject = ['$resource'];

function contactService($resource) {
    return $resource(
        "/api/contact"
    );
}

/*
   model.getDoohkyById = function( id )
    {
       if( this.data ) {
            var deferred = $q.defer();
            if( this.data.length > 0) {
                for( var i =0; i < this.data.length; i++)
                {
                    if( this.data[i].id === id )
                    {
                        //this returns a value
                        deferred.resolve(this.data[i]);
                        break ;
                    }
                }
            }
            return deferred.promise;
        }

        // this returns a promise
        return this.service.getBy('id',id);
    }
*/