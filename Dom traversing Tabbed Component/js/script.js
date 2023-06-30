'use strict';

const tabs = document.querySelectorAll('.btn');
const tabContainer = document.querySelector('.tab-container'); 
const contentsContainer = document.querySelector('.content-container');
const contents = document.querySelectorAll('.content');

tabContainer.addEventListener('click', function(e) {
    
    tabs.forEach(tab => tab.classList.remove('btn--active'));

    if(e.target.classList.contains('tab-container')) return;
    else {
        e.target.classList.add('btn--active');
    };

    contents.forEach(content => content.classList.remove('content--active'));
    document.querySelector(`.content${e.target.dataset.tab}`).classList.add('content--active');
});

const navContainer = document.querySelector('.nav-list');
const li = document.querySelectorAll('.li');

navContainer.addEventListener('mouseover', function(e) {
    li.forEach(i => i.classList.remove('nav-active'));
    if(e.target.classList.contains('nav-list')) {
        return;
    } else {
        e.target.classList.add('nav-active');
        e.target.style.opacity = '100%';
    }
});