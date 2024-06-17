<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    //1. Property
    protected $fillable = [
        'category_name',
        'description',
        // Add other attributes that you want to be mass assignable
    ];

    //2. Constructor

    //3. method
}