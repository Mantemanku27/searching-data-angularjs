<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap layanan aplikasi apapun.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Daftar layanan aplikasi apa saja.
     *
     * @return void
     */
    public function register()
    {
        // Servis Siswa 
        $this->app->when('App\Http\Controllers\SiswaController')
            ->needs('App\Domain\Contracts\SiswaInterface')
            ->give('App\Domain\Repositories\SiswaRepository');
    }

}
