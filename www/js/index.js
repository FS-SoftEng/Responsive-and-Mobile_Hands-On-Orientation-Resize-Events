/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        // Handle orientation change event
        window.addEventListener('orientationchange', this.onOrientationChange);
        // Handle resize event
        window.addEventListener("resize", this.onResize);
        app.updateUI();
    },
    onOrientationChange: function () {
        console.log("Orientation change event - " + "orientation: " + window.orientation);
        app.updateUI();
    },
    onResize: function () {
        console.log("Resize event - " + "width: " + screen.width + ", height: " + screen.height);
        app.updateUI();
    },
    updateUI: function () {
        var orientation = '';
        //alert(window.orientation);
        switch (window.orientation) {
            case 0:
                orientation = 'portrait';
            break;
            case 90:
                orientation = 'landscape';
            break;
            case 180:
                orientation = 'upside-down'; // many devices do not support this one
            break;
            case -90:
                orientation = 'landscape';
            break;
            default:
                orientation = "unkown"; // should never get this one
            break;
        }
        document.getElementById('outputOrientationResize').innerHTML =
            "orientation: " + orientation + "<br/>" +
            "width: " + screen.width + ", height: " + screen.height;
    }
};

app.initialize();

