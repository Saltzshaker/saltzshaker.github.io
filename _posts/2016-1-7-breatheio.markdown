---
title:  "BreatheIO Bot"
banner_img: "breathio-700x400.png"
date:   2016-01-07 15:33:53 -0400
permalink: breathe-io
description: "A Slack bot who guides you through custom breathing exercises"
categories: jekyll update
tag: "Conversational UI design, Chatbot development"
---
{% include post-nav.html %}
<div class="fullpost">
<div class="container post">

        <!-- Portfolio Item Heading -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    BreatheIO Bot
                </h1>
            </div>
        </div>
        <hr>
        <!-- /.row -->

        <!-- Portfolio Item Row -->
        <div class="row">

            <div class="col-md-8">
                <img class="img-responsive" src="/img/breatheio/robo-750x500.png" alt="">
            </div>

            <div class="col-md-4 overview">
                <h3>Overview</h3>
                <p>BreatheIO is a simple Slack bot for breathing exercises. BreatheIO helps incorporate good mental health habits into the workplace in a playful way.</p>
                <h3>Project Details</h3>

                    <p><span class="highlight">Timeline:</span> Three weeks</p>
                    <p><span class="highlight">Methods:</span> Experience Prototyping, Empathy Maps, Data Modeling</p>
                    <p><span class="highlight">Tools:</span> Slack API, Giphy API, Ruby (Sinatra framework), Postgres/Sqlite</p>
            </div>

        </div>
        <!-- Portfolio Item Detail -->
        <div class="row">
            <div class="col-lg-12">
                
<h2>Technical Implementation</h2>
                <img src="/img/breatheio/breatheslash.png" alt="chill gif" class="img-responsive smaller">
<p>BreatheIO is a Slack bot built in Ruby and Sinatra. It leverages features in the Slack API such as interactive button messages and media attachments, as well as slash commands and incoming and outgoing webhooks. Gif urls from the Giphy API are stored in a database (Sqlite in development and Postgres in production), and pulled dynamically for the “chill gif” trigger word. The database is managed through the Active Record gem, which I used to access the models for the gifs, events, and slack team information. I also used the JSON gem to make blocks of JSON interpretable to Slack, which sends and receives JSON messages.</p>
        
        <h2>Conversation flow</h2>
               <p>I refined the conversation flow through two rounds of experience prototyping. During these sessions, I tested out rough scripts and conversation flows, pretending to be a bot while communicating with several test users. After incorporating their feedback, I arrived at the following conversation flow.</p>
                <img src="/img/breatheio/BreatheIOwork.png" alt="workflow" class="img-responsive smaller">
            <h2>Personality</h2>
<p>If BreatheIO bot were a person, they would be a Hawaiian surfer and monk, combining the laid-back humor of a beach bum with the thoughtful serenity of a theologian. His personality is expressed whenever you launch into a new breath with the “new breath” trigger word by saying “Need a breather? That's what I'm here for” and showing a levitating sock monkey. He is helpful without being pushy. When you’ve completed a breath, he says “Whew, that felt good. Type '/breathe' whenever you want to take another breather with me!” — encouraging, informational, and colloquial.</p>

  <img src="/img/breatheio/breather.png" alt="chill gif" class="img-responsive even-smaller inline">
  <img src="/img/breatheio/whew.png" alt="chill gif" class="img-responsive even-smaller inline">
               <img src="/img/breatheio/timer.png" alt="chill gif" class="img-responsive even-smaller inline">
                <h3>Media & Documentation</h3>
                <p>Breathing counter in action</p>
                <img src="/img/breatheio/counter.gif" alt="chill gif" class="img-responsive smaller">
                <p>Chill gif in action</p>
                <img src="/img/breatheio/chillgif.gif" alt="chill gif" class="img-responsive lil-smaller">
            </div>
        </div>
        </div>