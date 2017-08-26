---
title:  "Into the Mode"
banner_img: "intothemode-700x400.png"
date:   2016-01-03 15:33:53 -0400
permalink: into-the-mode
description: "An alternate history of text-editing: a simulation based on Xerox Parc-era modal text editing"
categories: jekyll update
tags: "Interaction design, Web development"
---
{% include post-nav.html %}
<div class="fullpost">
<div class="container post">

        <!-- Portfolio Item Heading -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header"> Into the Mode
                </h1>
            </div>
        </div>
        <hr>
        <!-- /.row -->

        <!-- Portfolio Item Row -->
        <div class="row">

            <div class="col-md-8">
                <img class="img-responsive post-cover" src="/img/intothemode/modal.png" alt="">
            </div>

            <div class="col-md-4 overview">
                
                <h3>Overview</h3>
                <p>I built an interactive web simulation of an early text editor interaction based on interactions described in Larry Tesler’s essay, <a href="http://worrydream.com/refs/Tesler%20-%20A%20Personal%20History%20of%20Modeless%20Text%20Editing%20and%20Cut-Copy-Paste.pdf">A Personal History of Modeless Text Editing and Cut/Copy-Paste</a>. </p>
                <p>The simulation offers an alternate history of text editing, allowing users to see what it would have been like to have to move, delete, insert, replace and undo edits in a modal text editor.</p>
                <h3>Project Details</h3>
                    <h2>Tools</h2> 
                    <p>Sketch, InVision, HTML, CSS, Bootstrap, JavaScript, JQuery</p>
            </div>

        </div>
        <!-- Portfolio Item Detail -->
        <div class="row">    
            <div class="col-lg-12">
                <h2>Project Goal</h2>
                <p>
                    Because my project aimed to showcase the particularly poor user experience design of early modal text editors, my goal was not to improve the historical aspects of the user experience, but the educational aspects of the user experience, highlighting the clunkiness of the process in a deliberate way. <span class="highlight">In other words, my goal was to make a usable unusable interface.</span> I wanted the movement through verb and noun modes to be frustratingly slow and clunky, but also easily discoverable to the user, in terms of what they could or should do in each mode. 
                </p>
                <h2>Aesthetic</h2>
                   <p>I was inspired by GUI designs from the 1970s and 1980s, in particular the 1976 Xerox Smalltalk text editor and Xerox Bravo, the first WYSIWYG document preparation program.  My design incorporates the bitmap grayscale aesthetic and window layout of these early GUIs. For inspiration, I made a Pinterest board for retro GUIs. </p>
                   
                 <div class="embed">
                 <a class="embed" data-pin-do="embedBoard" data-pin-board-width="950" data-pin-scale-height="280" data-pin-scale-width="150" href="https://www.pinterest.com/saltzshaker/retro-gui/"></a></div>
                   <p>I used Sketch to mock up a wireframe of the interface, which, given the lack of visual designers in this moment of computer history, rendered my wireframes very close to the interface I eventually built out.</p>
                   <img src="../img/althistory.png" alt="" class="img-responsive">
                <h3>User Experience Map</h3>
                <p>Next, I created a UX map. Based on this, I built out my wireframe into multiple screens to create a clickable <a href="https://projects.invisionapp.com/share/X39B7MOPE#/screens/204720668">InVision prototype</a> to test out this flow. In order to gauge its historical accuracy, I also sent it to author Larry Tesler. Through this, I learned that my initial flow was slightly inaccurate: in reality, the mode would reset to the beginning after an action. This flow is reflected in the final interactions.</p> 
                <img src="/img/intothemode/modal-map" class="img-responsive smaller" alt="User experience map">
                <h3>Interaction</h3>
                <p>1. Insert Mode</p>
                <img src="/img/intothemode/modal-insert.gif" alt="Insert" class="img-responsive smaller">
                <p>2. Delete Mode</p>
                <img src="/img/intothemode/modal-delete.gif" alt="Delete" class="img-responsive smaller">
                <p>3. Move Mode</p>
                <img src="/img/intothemode/modal-move2.gif" alt="Move" class="img-responsive smaller">
                <h3>Demo</h3>
                <p>Try out the <a href="WYSIWYG">live demo</a> for yourself to feel renewed gratitude for the world of WYSIWYG editors.</p>
            </div>
        </div>
        </div>