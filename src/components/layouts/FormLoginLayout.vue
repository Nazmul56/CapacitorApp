<template>
    <div class="bs-5">
        <div class="container bg-brand-800 font-color-white">
            <div class="row d-flex registration-form-wrapper">
                <div class="col-12 col-md-6 px-0">
                    <div class="form-section-left col-12 d-block">
                        <div class="left-wrapper">
                            <slot name="imageLogin"></slot>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 form-container px-4">
                    <div class="h-100 d-flex align-items-center form-section-right">
                        <slot name="formLogin"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@import "../../assets/style/global.scss";

.form-wrapper {
    padding: 40px 220px 40px 220px;

    @media (max-width: 1200px) {
        padding: 40px 40px 40px 40px;
    }

    h1 {
        color: color("white");
    }

    h3 {
        color: color("brand-200");
    }

    p {
        color: color("gray-400");
    }
}

.form-section-left {
    .left-wrapper {
        position: relative;
        overflow: hidden;
        position: relative;

        img {
            width: 100%;
            height: 600px;
            object-fit: cover;
            object-position: center 40%;
        }
    }
}

.form-section-right {
    form {
        width: 100%;
    }

    .right-wrapper {
        flex: auto;
        width: 100%;

        // @include media-breakpoint-down(lg) {
        //     padding-bottom: 60px;
        // }

        .selection-process-back-icon-box {
            .selection-process-icon {
                // @include media-breakpoint-down(md) {
                //     justify-content: end;
                // }

                .icon-box {
                    text-align: center;
                    color: color("brand-500");
                    margin: 0 8px;
                    position: relative;
                    width: 50px;

                    &.active {

                        i,
                        p {
                            color: color("white") !important;
                        }
                    }

                    &.complete {

                        i,
                        p {
                            color: color("green-500") !important;
                        }
                    }

                    &.incomplete {

                        i,
                        p {
                            color: color("brand-500") !important;
                        }
                    }

                    &::before {
                        content: '';
                        border-style: dashed;
                        width: 25px;
                        position: absolute;
                        left: 45px;
                        top: 12px;
                        border-top: -0.5px solid color("brand-500");
                        border-bottom: unset;
                        border-left: unset;
                        border-right: unset;
                    }

                    &:last-child::before {
                        content: '';
                        border-top: 0px solid color("brand-500");
                    }

                    p {
                        font-size: 12px;
                        margin-bottom: .5rem;
                    }
                }
            }
        }

        .dropdown {
            padding: 0 0px;
            height: 36px;
            border-radius: 1px !important;
            width: 100%;

            .bootstrap-select {
                display: block;
                width: 100%;
                height: 100%;
                font-size: 14px;
                background-color: color("white-10");
                background-image: none;
                border: unset;
                color: color("brand-100") !important;
                font-size: 14px;
                margin-bottom: 10px;
                border-radius: 1px;

                .btn {
                    &.dropdown-toggle {
                        background-color: unset;
                        background-image: none;
                        border: unset;
                        color: color("brand-100") !important;
                        border-radius: unset;
                        height: 100%;

                        &:focus {
                            outline: unset !important;
                            outline-offset: unset;
                        }
                    }

                    &:focus {
                        box-shadow: unset;
                    }
                }

                .dropdown-menu {
                    background-color: color("brand-600");
                    color: color("brand-100");

                    ul {
                        li {
                            a {
                                color: color("brand-100");

                                &:focus {
                                    border: 0;
                                    box-shadow: unset;
                                }

                                &:focus,
                                &:hover {
                                    outline: unset;
                                    outline-offset: unset;
                                    border: 0;
                                    box-shadow: unset;
                                    color: color("brand-100");
                                    text-decoration: none;
                                    background-color: color("brand-700");
                                }
                            }
                        }
                    }
                }

            }
        }

        .button-wrapper {
            margin-top: auto;
            gap: 16px;

            a,
            button {
                width: 100%;
                border-radius: 0;
                // @extend .font-sm;

                &:hover {
                    color: color("gray-400");
                }
            }
        }

        &.auth {
            flex-wrap: wrap;
            font-family: 'manrope';

            .auth-wrapper {
                border: 1px solid color("brand-600");
                padding: 15px;

                i {
                    font-size: 60px;
                }

                h1 {
                    font-size: 18px;
                }

                p {
                    font-family: 'manrope';
                }

                b {
                    font-size: 12px;
                }

                .code-input {
                    gap: 16px;

                    input {
                        background-color: color("white-10");
                        border: unset;
                        height: 36px;
                        color: color("brand-100");
                        font-size: 14px;
                        text-align: center;
                        max-width: 40px;

                        &.is-invalid {
                            border: 1px solid;
                            border-color: color("red-600");
                        }
                    }
                }
            }
        }

        .code-input {
            gap: 8px;

            button {
                background-color: transparent;
                border: unset;
                height: 36px;
                color: color("brand-100");
                font-size: 14px;
                border: 1px solid #EFEFEF;
                border-radius: unset;

                &.active {
                    background-color: white !important;
                    color: black;
                }
            }
        }

        .details-modal {
            position: relative;
            gap: 15px;
            border: 1px solid gray;

            img {
                width: 45px;
            }

            div {
                width: 300px;

                h3 {
                    font-size: 18px;
                }

                p {
                    // width: 170px;
                    font-size: 12px;
                }

            }

            button {
                position: absolute;
                top: 0;
                right: 5px;
                background-color: transparent;
                color: color("brand-500");
                border: unset;
                font-size: 22px;
            }
        }

        .color-choose-tab-section {
            display: flex;
            width: 100%;
            list-style: none;
            gap: 10px;
            overflow: auto;

            li {
                button {
                    width: max-content;
                    font-size: 14px;
                    border: unset !important;

                    &.active {
                        border-bottom: 1px solid white !important;
                    }
                }
            }
        }

        .fav-color {
            ul {
                list-style: none;

                li {
                    .container {
                        margin-top: 50px;
                        margin-left: 20px;
                        margin-right: 20px;
                    }

                    .checkbox {
                        width: 100%;
                        margin: 15px auto;
                        position: relative;
                        display: block;
                    }

                    .checkbox input[type="checkbox"] {
                        width: auto;
                        opacity: 0.00000001;
                        position: absolute;
                        left: 0;
                        margin-left: -20px;
                    }

                    .checkbox label {
                        position: relative;
                    }

                    .checkbox label:before {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 0;
                        margin: 4px;
                        width: 22px;
                        height: 22px;
                        transition: transform 0.28s ease;
                        border-radius: 3px;
                        border: 0px solid #7bbe72;
                    }

                    .checkbox label:after {
                        content: '';
                        display: block;
                        width: 16px;
                        height: 8px;
                        border-bottom: 4px solid #7bbe72;
                        border-left: 4px solid #7bbe72;
                        box-shadow: none;
                        -webkit-transform: rotate(-45deg) scale(0);
                        transform: rotate(-45deg) scale(0);
                        transition: transform ease 0.25s;
                        will-change: transform;
                        position: absolute;
                        top: 12px;
                        left: 10px;
                    }

                    .checkbox input[type="checkbox"]:checked~label::before {
                        color: #7bbe72;
                    }

                    .checkbox input[type="checkbox"]:checked~label::after {
                        -webkit-transform: rotate(-45deg) scale(1);
                        transform: rotate(-45deg) scale(1);
                    }

                    .checkbox label {
                        min-height: 34px;
                        display: block;
                        padding-left: 40px;
                        margin-bottom: 0;
                        font-weight: normal;
                        cursor: pointer;
                        vertical-align: sub;
                    }

                    .checkbox label span {
                        position: absolute;
                        top: 50%;
                        -webkit-transform: translateY(-50%);
                        transform: translateY(-50%);
                    }

                    .checkbox input[type="checkbox"]:focus+label::before {
                        outline: 0;
                    }
                }
            }
        }
    }
}

.form-container {
    .form-group {
        font-family: 'manrope';
        margin-bottom: unset;

        label {
            color: color("gray-500");
            font-size: 12px;
            margin-bottom: 16px;
            // @extend .font-base;
        }

        input,
        select {
            background-color: color('white-10');
            border: unset;
            color: color("brand-100") !important;
            font-size: 14px;
            margin-bottom: 10px;
            // @extend .font-base;

            &.is-invalid {
                border: 1px solid;
                border-color: color("red-600");
            }

            &[type="text"],
            &[type="email"],
            &[type="number"],
            &[type="date"],
            &[type="password"] {
                padding: 8px;
                height: 36px;
                border-radius: 1px !important;
            }

            &[type="radio"] {
                display: none;

                &+label {
                    display: flex;
                    align-items: center;
                }

                &+label:before {
                    content: "";
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    // padding: 3px;
                    margin-right: 6px;
                    background-clip: content-box;
                    // border: 2px solid #bbb;
                    background-color: color("brand-100");
                    border-radius: 50%;
                    // @extend .font-base;
                }

                &:checked+label:before {
                    border: 6px solid color("white-10");
                    padding: 0px;
                    background-color: color("white");
                    // @extend .font-base;
                }
            }

        }

        select {
            padding: 8px;
            height: 36px;
            border-radius: 1px !important;
        }

        .radio-wrapper {
            span {
                flex: 1 1 auto;
                color: color("gray-500");
            }
        }

        label {
            a {
                color: color("gray-500");

                &:hover {
                    color: color("brand-50");
                    ;
                }
            }

        }
    }
}
</style>
