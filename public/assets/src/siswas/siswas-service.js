app.factory('siswas', ['$http', function ($http) {
    return {
        
        // Get Data dengan Pagination & Pencarian Data
        get: function (page, term) {
            return $http({
                method: 'get',
                url: '/api/siswas?page=' + page + '&term=' + term,
                headers: {'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'}
            });
        },

        // List Data
        getLastsiswas: function () {
            return $http({
                method: 'get',
                url: '/api/get-last-siswas',
            });
        },

        // Simpan Data
        store: function (inputData) {
            return $http({
                method: 'POST',
                url: '/api/siswas',
                data: $.param(inputData)
            });
        },

        // Tampil Data
        show: function (_id) {
            return $http({
                method: 'get',
                url: '/api/siswas/' + _id,
            });
        },

        // Hapus Data
        destroy: function (_id) {
            return $http({
                method: 'delete',
                url: '/api/siswas/' + _id,
            });
        },

        // Update Data
        update: function (inputData) {
            return $http({
                method: 'put',
                url: '/api/siswas/' + inputData.id,
                data: $.param(inputData)
            });
        },

        // Pengaman Data
        kunci: function (_id) {
            return $http({
                method: 'put',
                url: '/api/kunci-siswas/' + _id
            });
        },

    }
}]);
