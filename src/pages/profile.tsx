import { Component } from 'solid-js'

import './style/profile.scss'

const Profile: Component = () => {
    interface DetailProps {
        holder: string
        data: string
    }
    const Detail: Component<DetailProps> = R => {
        return (
            <div class='detail-row'>
                <div class='holder'>{R.holder}</div>
                <div class='data'>{R.data}</div>
            </div>
        )
    }

    return (
        <fieldset class='user-profile-container'>
            <legend class='user-legend title_small'>مشخصات دانشجو</legend>
            <div class='user-details title_small'>
                <div class='detail-row'>
                    <div class='holder'>تصویر</div>
                    <div class='data'>
                        <img src='/public/imgs/akhi.jpg' alt='' />
                    </div>
                </div>
                <Detail holder='نام‌خانوادگی' data='اخوان' />
                <Detail holder='کدملی' data='0150855338' />
                <Detail holder='نام' data='سید امیرضا' />
                <Detail holder='نام پدر' data='سید علی' />
                <Detail holder='شماره شناسنامه' data='0150855338' />
                <Detail holder='کد دوم' data='102066' />
                <Detail holder='رشته' data='مهندسی صنایع' />
                <Detail holder='تاریخ تولد' data='1384/01/22' />
                <Detail holder='مقطع' data='کارشناسی پیوسته' />
                <Detail holder='جنسیت' data='مرد' />
                <Detail holder='نظام آموزشی' data='-' />
                <Detail holder='تاهل' data='مجرد' />
                <Detail holder='نمیسال پذیرش' data='نیمسال اول 1402-1403' />
                <Detail holder='وضعیت نظام وضیفه' data='معاف تحصیلی' />
                <Detail holder='نوع پذیرش' data='کنکور' />
                <Detail holder='تمام وقت' data='شیوه آموزش' />
                <Detail holder='سهمیه' data='منقطه 1' />
                <Detail holder='نوع تعهد' data='' />
                <Detail holder='دانشکده' data='113 - امیرکبیر' />
                <Detail holder='طراحی سیستم ها و روش ها' data='گروه' />
                <Detail holder='محل صدور' data='تهران' />
                <Detail holder='دین' data='مسلمان' />
                <Detail holder='بومی/غیر بومی' data='بومی' />
                <Detail holder='آخرین وضعیت' data='مجاز به انتخاب واحد' />
                <Detail holder='نام خانوادگی لاتین' data='akhavan' />
                <Detail holder='نام لاتین' data='amirrreza' />
                <Detail holder='امتیاز کل' data='319' />
                <Detail holder='کل تعداد واحد موثر' data='86' />
                <Detail holder='کل تعداد واحد گذرانده' data='72' />
                <Detail holder='کل تعداد واحد رد شده' data='0' />
                <Detail holder='تاریخ بروزرسانی' data='1404/11/20' />
            </div>
        </fieldset>
    )
}

export default Profile
