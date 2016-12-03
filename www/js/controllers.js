angular.module('starter.controllers', [])

.controller('DocsCtrl', function ($scope, Docs) {
    $scope.rd_rds = Docs.get_rd_rd();
    $scope.rd_trs = Docs.get_rd_tr();
    $scope.rd_nms = Docs.get_rd_nm();

    $scope.view_link = function (url) {
        url = 'https://docs.google.com/viewer?url=http://milkmushrooms.com/isdocs/' + url + '.pdf';
        var ref = window.open(url, '_blank', 'location=yes');
    };
    $scope.rd_hid = 1;
    $scope.rd_showing = function () {
        if ($scope.rd_hid == 1) $scope.rd_hid = 0;
        else $scope.rd_hid = 1;
    };

    $scope.tr_hid = 1;
    $scope.tr_showing = function () {
        if ($scope.tr_hid == 1) $scope.tr_hid = 0;
        else $scope.tr_hid = 1;
    };

    $scope.nm_hid = 1;
    $scope.nm_showing = function () {
        if ($scope.nm_hid == 1) $scope.nm_hid = 0;
        else $scope.nm_hid = 1;
    };
})

.controller('ActsCtrl', function ($scope, Norms) {
    $scope.gt_fzs = Norms.get_gt_fz();
    $scope.gt_ups = Norms.get_gt_up();
    $scope.gt_pps = Norms.get_gt_pp();

    $scope.pd_fzs = Norms.get_pd_fz();
    $scope.pd_ups = Norms.get_pd_up();
    $scope.pd_pps = Norms.get_pd_pp();
    $scope.pd_os = Norms.get_pd_o();

    $scope.fz_kts = Norms.get_fz_kt();
    $scope.fz_ds = Norms.get_fz_d();
    $scope.fz_obs = Norms.get_fz_ob();

    $scope.up_kis = Norms.get_up_ki();
    $scope.up_obs = Norms.get_up_ob();

    $scope.pp_kis = Norms.get_pp_ki();
    $scope.pp_sts = Norms.get_pp_st();
    $scope.pp_obs = Norms.get_pp_ob();

    $scope.o_kis = Norms.get_o_ki();
    $scope.o_obs = Norms.get_o_ob();

    $scope.view_link = function (url) {
        url = 'https://docs.google.com/viewer?url=http://milkmushrooms.com/isdocs/' + url + '.pdf';
        var ref = window.open(url, '_blank', 'location=yes');
    }

    $scope.fz_hid = 1;
    $scope.fz_showing = function () {
        if ($scope.fz_hid == 1) $scope.fz_hid = 0;
        else $scope.fz_hid = 1;
    };
    $scope.pp_hid = 1;
    $scope.pp_showing = function () {
        if ($scope.pp_hid == 1) $scope.pp_hid = 0;
        else $scope.pp_hid = 1;
    };
    $scope.up_hid = 1;
    $scope.up_showing = function () {
        if ($scope.up_hid == 1) $scope.up_hid = 0;
        else $scope.up_hid = 1;
    };
    $scope.o_hid = 1;
    $scope.o_showing = function () {
        if ($scope.o_hid == 1) $scope.o_hid = 0;
        else $scope.o_hid = 1;
    };
})

.controller('StandartsCtrl', function ($scope, Gosts) {
    $scope.st_gs = Gosts.get_st_g();
    $scope.st_is = Gosts.get_st_i();

    $scope.view_link = function (url) {
        url = 'https://docs.google.com/viewer?url=http://milkmushrooms.com/isdocs/' + url + '.pdf';
        var ref = window.open(url, '_blank', 'location=yes');
    }

    $scope.i_hid = 1;
    $scope.i_showing = function () {
        if ($scope.i_hid == 1) $scope.i_hid = 0;
        else $scope.i_hid = 1;
    };

    $scope.g_hid = 1;
    $scope.g_showing = function () {
        if ($scope.g_hid == 1) $scope.g_hid = 0;
        else $scope.g_hid = 1;
    };
})
