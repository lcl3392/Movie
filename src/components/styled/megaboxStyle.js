import styled from 'styled-components'

// Megabox
export const Container = styled.div`
width: 100vw;
margin: auto;
padding: 50px 0 100px;
box-sizing: border-box;
user-select: none;
/* background-image: url(https://img.freepik.com/free-psd/two-buckets-with-popcorn-mockup_58466-12045.jpg?size=626&ext=jpg); */
h2 {
    font-weight: 900; color: #020506;
    margin: 10px 670px 50px;
    font-size: 100px;
    width: 245px;
    cursor: pointer;
    &:hover { transform: scale(110%); transition: 0.3s; }
}
`

// MegaboxForm
export const MegaboxSearchForm = styled.form`
text-align: center; 
    input {
        width: 50%; height: 7vh;  border: 1px solid #000; padding:3px 25px; font-size: 15px; outline: none;
        font-size: 18px;
        }
`

export const MegaboxTabBox = styled.div`
&.tab-list {
    background: #FFF;
    display: inline;
    button {
        width: 300px;
        height: 50px;
        background: #3d3b3b;
        border: 1px solid #21163d;
        border-bottom: none;
        border-radius: 15px 15px 0 0;
        letter-spacing: -2.5px;
        color: white;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
        &:hover {
            background: #000;
        }
        &.on {
            background: #000;
        }
    }
}
`

// MegaboxList
export const MegaboxListContainer = styled.div`
width: 1270px;
margin: 60px auto;
ul {
display: flex;
flex-wrap: wrap;
padding: 50px 30px 0;
box-sizing: border-box;
background: #000;
    li {
        border: 1px solid #bcb0d0;
        padding: 7px;
        box-sizing: border-box;
        background: #FFF;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        margin: 0 20px 55px;
        position: relative;
        &:hover {
            transform: scale(110%); transition: 0.3s; }
        }
        .img {
            position: relative;
            height: 350px;
            .txt {
                content: "";
                width: 100%; height: 100%;
                position: absolute;
                background: #000;
                top: 0; left: 0;
                opacity: 0;
                transition: 0.8s;
                padding: 20px; box-sizing: border-box;
                color: #FFF;
                font-size: 17px;
                line-height: 1.89;

                display: -webkit-box;
                -webkit-line-clamp: 10; /* 원하는 줄 수 표시 */
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            &:hover .txt {
                opacity: 0.7;
            }
            img {
                width: 245px;
            }
        }
        h3 {
            width: 245px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            text-indent: 5px;
            font-size: 27px; font-weight: 600;
            color: #000;
            margin: 10px 0;
        }
        p {
            text-indent: 5px;
            display: flex;
            justify-content: space-between;
            width: 240px;
            span {
                position: relative;
                font-size: 15px;
                &:last-child::after {
                    content: "";
                    display: block;
                    width: 1px; height: 14px;
                    background: #bcb0d0;
                    position: absolute;
                    top: 55%; left: -6%;
                    transform: translateY(-50%);
                }
            }
        }
        .btn {
            width: 100%;
            display: flex;
            justify-content: space-around;
            margin: 20px 0 10px;
                button {
                    width: 100px; height: 40px;
                    background: #999999;
                    border: none;
                    font-size: 18px;
                    font-weight: 700;
                    cursor: pointer;
                    border-radius: 25px;
                    box-shadow: rgba(180,180,180) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(180,180,180) 0px -2px 6px 0px inset;
                    &:hover { background: #000; color: #FFF; }
                    i { margin-left: -3px; margin-right: 3px; color: #f70707; }
                }
            }
        }
.checkbox-wrapper-3 {
    background: #000;
    padding: 40px 0 0 50px;
    position: relative;
    p { position: absolute; top: 55%; left: 100px; font-size: 17px; color: #fff; }
    #cbx-3 {
        visibility: hidden;
        display: none;
        &:checked + .toggle:before { background: #fff; }
        &:checked + .toggle span {
            background: #3d3b3b;
            transform: translateX(20px);
            transition: all 0.2s cubic-bezier(0.8, 0.4, 0.3, 1.25), background 0.15s ease;
            box-shadow: 0 3px 8px rgba(90, 90, 90);
        }
        &:checked + .toggle span:before {
            transform: scale(1);
            opacity: 0;
            transition: all 0.4s ease; }
    }
    .toggle {
    position: relative;
    display: block;
    width: 40px;
    height: 20px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transform: translate3d(0, 0, 0);
    &::before {
        content: "";
        position: relative;
        top: 3px;
        left: 3px;
        width: 34px;
        height: 14px;
        display: block;
        background: #9A9999;
        border-radius: 8px;
        transition: background 0.2s ease;
    }
    span {
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        display: block;
        background: white;
        border-radius: 10px;
        box-shadow: 0 3px 8px rgba(154, 153, 153, 0.5);
        transition: all 0.2s ease;
        &::before {
            content: "";
            position: absolute;
            display: block;
            margin: -18px;
            width: 56px;
            height: 56px;
            background: rgba(90, 90, 90, 0.5);
            border-radius: 50%;
            transform: scale(0);
            opacity: 1;
            pointer-events: none; }
        }
    }
}
`

// MegaboxModal
export const MegaboxModalBox = styled.div`
    .bg { position: fixed; width: 100%; height: 100%; left: 0; top: 0; background: #000; opacity: 0.8;}
    .popup { position: fixed;
        width: 900px; height: 700px;
        left: 50%; top: 50%;
        transform: translate(-50%, -50%);
        padding: 30px; box-sizing: border-box;
        background: #000;
        border: 1px solid #ffd309;
        .popbg {
            width: 100%; height: 100%;
            position: absolute;
            top: 0; left: 0;
            background-size: cover;
            z-index: -10;
            opacity: 0.15;
            -webkit-filter: blur(5px); 
            background-position: 50% 50%;
        }
        .close {
            position: absolute;
            top: 15px; right: 20px;
            font-size: 30px;
            color: #bcb0d0;
            cursor: pointer;
        }
        strong {
                font-size: 32px;
                font-weight: 700;
                color: #bcb0d0;
                margin-right: 20px;
        }
                span {
                        font-size: 50px;
                        font-weight: 700;
                        color: #ffd309;
                        margin-right: 20px;
                    }
                em {
                    font-size: 16px;
                    color: #bcb0d0;
                    i { color: #ffd309; font-size: 22px; margin-left: 5px;
                        animation: ani 1.5s infinite; }
                        @keyframes ani {
                        0% { opacity: 1; }
                        50% { opacity: 0; }
                        100% { opacity: 1; } }
                }
                h3 {
                            font-size: 40px;
                            font-weight: 700;
                            margin: 0 0 20px;
                            color: #ffd309;
                        }
        .popup-top {
            display: flex;
            align-items: end;
            margin-top: 10px;
            iframe { margin-right: 30px; }
            h3 { font-weight: 700;color: #ffd309; }
            div {
                width: 300px;
                em { color: #bcb0d0; font-size: 20px; display: block;
                strong { font-size: 30px; margin-right: 0; margin: 0 10px; }}
            }
        }
        .popup-bottom {
            h3 { font-size: 30px; color: #ffd309; margin: 30px 0; }
            p { font-size: 16px; color: #fff; }
        }
    }
`

// MegaboxHeader
export const MegaboxHeaders = styled.header`
/* width:100%; text-align:center; padding:60px 0; background:#000; */
.logo {opacity: 1;
img {width:250px; height:150px;}} 
.header_menu {position:relative; margin-top:36px;
    &:before {content:''; position:absolute; left:0; top:50%; display:block; width:100%; height:1px; background:#474747}
    li {position:relative; display:inline-block; padding:0 20px; background:#000; color: #fff;
    &:before {content:''; position:absolute; left:0; top:50%; display:block; width:3px; height:3px; margin-top:-2px; background:#989898}
    &:first-child:before {display:none}
    a {opacity:0.5; color:#fff; font-size:18px}}
    }
`

// MegaboxFooter
export const MegaboxFooters = styled.footer`
width:100%; text-align:center; padding:60px 0; background:#000;
.logo {opacity: 1;
img {width:250px; height:150px;}} 
.footer_menu {position:relative; margin-top:36px;
    &:before {content:''; position:absolute; left:0; top:50%; display:block; width:100%; height:1px; background:#474747}
    li {position:relative; display:inline-block; padding:0 20px; background:#000; color: #fff;
    &:before {content:''; position:absolute; left:0; top:50%; display:block; width:3px; height:3px; margin-top:-2px; background:#989898}
    &:first-child:before {display:none}
    a {opacity:0.5; color:#fff; font-size:18px}}
    }
copyright {display:block; color:#707070; font-size:14px; margin-top:40px}
`