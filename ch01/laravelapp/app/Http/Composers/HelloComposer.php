<?php
namespace App\Http\Composers;

use illuminate\View\View;

class HelloComposer {

    public function compose(View $view) {
        $view->with('view_message', 'this view is "' . $view->getName() . '"!!');
    }
}