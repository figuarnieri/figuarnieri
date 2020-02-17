'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (name) {
    var pattern = {
        primary: '#f3123c',
        'primary-2': '#ff859c',
        'primary-3': '#ffc8d2',
        gray: '#2e2d37',
        'gray-2': '#696977',
        'gray-3': '#aeaeba',
        'gray-4': '#ecedf2',
        success: '#27ae60',
        danger: '#ff8332',
        warning: '#f2c94c',
        error: '#9b51e0',
        modal: 'rgba(46, 45, 55, 0.8)',
        white: '#fff',

        '#00d8a8': '#00d8a8',
        '#43bccd': '#43bccd',
        '#232323': '#232323',
        '#f9f9f9': '#f9f9f9'
    };
    return pattern[name] || pattern.primary;
};