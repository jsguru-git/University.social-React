import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
    html,
    body {
        height: 100%;
        width: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    .scrollbar-1::-webkit-scrollbar-thumb
    {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: #D62929;
    }

    .custom-check {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default checkbox */
    .custom-check input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    /* Create a custom-check checkbox */
    .checkmark {
        position: absolute;
        top: 3px;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
    }

    /* On mouse-over, add a grey background color */
    .custom-check:hover input ~ .checkmark {
        background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .custom-check input:checked ~ .checkmark {
        background-color: #2196F3;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .custom-check input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .custom-check .checkmark:after {
        left: 9px;
        top: 3px;
        width: 8px;
        height: 16px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .custom-tabs
    {
        border:0px;
        width:100%;
        border-bottom:1px solid #ddd;
        color:#aaa
    }

    .custom-tabs > li a {
        border: 0px;
        color:#fff;
        cursor:pointer;
        line-height:300%
    }

    .custom-tabs > li.active{
        color:#000;
        border: 0px;
        border-bottom:2px solid rgb(11,141,211);
        font-weight:bold;
    }

    .custom-tabs > li:hover{
        color:#000;
        background-color:#ddd;
        border-bottom:2px solid rgb(121,56,211);
    }

    .custom-tabs-blue
    {
        border:0px;
        width:100%;
        color:rgb(104,184,227)
    }

    .custom-tabs-blue > li a {
        border: 0px;
        text-decoration:none;
        color:rgb(104,184,227);
        cursor:pointer;
        line-height:300%;
        
    }

    .custom-tabs-blue > li.active a{
        color:#fff;
        border: 0px;
        font-weight:bold;
    }

    .custom-tabs-blue > li:hover{
        color:rgb(104,184,227);
        background-color:rgb(8,96,140);
    }

    .custom-tabs-vertical
    {
        border:0px;
        width:100%;
        color:#666
    }

    .custom-tabs-vertical > li a {
        border: 0px;
        color:#fff;
        cursor:pointer;
        line-height:300%;
        padding:1rem
    }

    .custom-tabs-vertical > li.active{
        color:#fff;
        border: 0px;
        background-color:rgb(11,141,211)
    }

    .custom-tabs-vertical > li:hover{
        color:#000;
        background-color:#ddd;
    }
    
    .light-font-icon{
        -webkit-text-stroke: 8px white;
    }

    ol.carousel-indicators li,
    ol.carousel-indicators li.active {
        float: left;
        width: 12px;
        height: 12px;
        margin: 0rem 0.25rem;
        border: 1px solid rgb(11,141,211);
        border-radius:6px;
        background:transparent;
    }

    ol.carousel-indicators li.active {
        border: 1px solid rgb(11,141,211);
        background: white;
        border-radius:6px
    }
    .custom-fa-stroke {
        -webkit-text-stroke: 1px #888;
        -webkit-text-fill-color: white;
        color: #888;
        
        text-shadow:
         -1px -1px 0 #888,  
          1px -1px 0 #888,
         -1px  1px 0 #888,
          1px  1px 0 #888;
    }

    .special-div-different-color {
        background-image: linear-gradient(bottom, white 50%, #f0f0f0 50%);
        background-image: -o-linear-gradient(bottom, white 50%, #f0f0f0 50%);
        background-image: -moz-linear-gradient(bottom, white 50%, #f0f0f0 50%);
        background-image: -webkit-linear-gradient(bottom, white 50%, #f0f0f0 50%);
        background-image: -ms-linear-gradient(bottom, white 50%, #f0f0f0 50%);
    }
`
