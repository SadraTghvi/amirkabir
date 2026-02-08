import { Component, For, Show } from 'solid-js'

import { Check2Icon } from 'icons'
import './style/courses.scss'

type COURSE = {
    course: string
    instructor: string
    units: number
    termCode: string
    status: string | null
    midTerm: number
    finalTerm: number | null
}
type TERM = {
    title: string
    courses: COURSE[]
}

const TERM_4022: TERM = {
    title: 'ترم 4022 ',
    courses: [
        {
            course: 'ریاضی 1',
            instructor: 'جناب آقای دکتر مقصود',
            units: 3,
            termCode: '4022',
            status: 'پاس شده',
            midTerm: 5.0,
            finalTerm: 18.0,
        },
        {
            course: 'فیزیک 1',
            instructor: 'جناب آقای دکتر قره داغی',
            units: 3,
            termCode: '4022',
            status: 'پاس شده',
            midTerm: 5.0,
            finalTerm: 14.25,
        },
        {
            course: 'آز فیزیک 1',
            instructor: 'جناب آقای دکتر قره داغی',
            units: 1,
            termCode: '4022',
            status: 'پاس شده',
            midTerm: 5.0,
            finalTerm: 20.0,
        },
        {
            course: 'تربیت بدنی 1',
            instructor: 'جناب آقای شمس آیادی',
            units: 1,
            termCode: '4022',
            status: 'پاس شده',
            midTerm: 5.0,
            finalTerm: 20.0,
        },
        {
            course: 'اندیشه اسلامی 1',
            instructor: 'جناب آقای دکتر اندیشه پرور',
            units: 2,
            termCode: '4022',
            status: 'پاس شده',
            midTerm: 3.0,
            finalTerm: 20.0,
        },
        {
            course: 'روش های تولید',
            instructor: 'جناب آقای دکتر فتح الله پور',
            units: 3,
            termCode: '4022',
            status: 'پاس شده',
            midTerm: 2.5,
            finalTerm: 20.0,
        },
        {
            course: 'اقتصاد عمومی 1',
            instructor: 'سرکار خانم دکتر الله یار',
            units: 2,
            termCode: '4022',
            status: 'پاس شده',
            midTerm: 3.5,
            finalTerm: 18.5,
        },
        {
            course: 'طراحی ایجاد صنایع',
            instructor: 'جناب آقای دکتر بهمنی',
            units: 3,
            termCode: '4022',
            status: 'پاس شده',
            midTerm: 5.0,
            finalTerm: 20.0,
        },
    ],
}
const TERM_4031: TERM = {
    title: 'ترم 4031 ',
    courses: [
        {
            course: 'ریاضی 2',
            instructor: 'جناب آقای دکتر مقصود',
            units: 3,
            termCode: '4031',
            status: 'پاس شده',
            midTerm: 2.25,
            finalTerm: 12.0,
        },
        {
            course: 'فیزیک 2',
            instructor: 'جناب آقای دکتر قره داغی',
            units: 3,
            termCode: '4031',
            status: 'پاس شده',
            midTerm: 1.0,
            finalTerm: 11.75,
        },
        {
            course: 'آز فیزیک 2',
            instructor: 'جناب آقای دکتر قره داغی',
            units: 1,
            termCode: '4031',
            status: 'پاس شده',
            midTerm: 3.0,
            finalTerm: 15.0,
        },
        {
            course: 'معادلات دیفرانسیل',
            instructor: 'جناب آقای دکتر بهمنی',
            units: 3,
            termCode: '4031',
            status: 'پاس شده',
            midTerm: 4.0,
            finalTerm: 14.25,
        },
        {
            course: 'محاسبات عددی',
            instructor: 'جناب آقای دکتر مقصود',
            units: 2,
            termCode: '4031',
            status: 'پاس شده',
            midTerm: 5.0,
            finalTerm: 20.0,
        },
        {
            course: 'برنامه نویسی کامپیوتر',
            instructor: 'جناب آقای دکتر فتح الله پور',
            units: 3,
            termCode: '4031',
            status: 'پاس شده',
            midTerm: 5.0,
            finalTerm: 20.0,
        },
        {
            course: 'زبان خارجی',
            instructor: 'سرکار خانم دکتر کوش آبادی',
            units: 3,
            termCode: '4031',
            status: 'پاس شده',
            midTerm: 5.0,
            finalTerm: 20.0,
        },
    ],
}
const TERM_4032: TERM = {
    title: 'ترم 4032 ',
    courses: [
        {
            course: 'اندیشه اسلامی 2',
            instructor: 'جناب آقای دکتر اندیشه پرور',
            units: 2,
            termCode: '4032',
            status: 'پاس شده',
            midTerm: 5.0,
            finalTerm: 20.0,
        },
        {
            course: 'دانش خانواده و جمعیت',
            instructor: 'جناب آقای دکتر اندیشه پرور',
            units: 2,
            termCode: '4032',
            status: 'پاس شده',
            midTerm: 5.0,
            finalTerm: 20.0,
        },
        {
            course: 'مهندسی فاکتور های منابع انسانی',
            instructor: 'جناب آقای دکتر مهدی',
            units: 3,
            termCode: '4032',
            status: 'پاس شده',
            midTerm: 3.25,
            finalTerm: 18.0,
        },
        {
            course: 'تحلیل سیستم ها',
            instructor: 'جناب آقای دکتر فتح الله پور',
            units: 3,
            termCode: '4032',
            status: 'پاس شده',
            midTerm: 3.75,
            finalTerm: 18.0,
        },
        {
            course: 'سیستم های اطلاعات مدیریت',
            instructor: 'سرکار خانم دکتر الله یار',
            units: 3,
            termCode: '4032',
            status: 'پاس شده',
            midTerm: 2.75,
            finalTerm: 19.0,
        },
        {
            course: 'شیمی عمومی',
            instructor: 'جناب آقای دکتر قره داغی',
            units: 3,
            termCode: '4032',
            status: 'پاس شده',
            midTerm: 1.0,
            finalTerm: 16.25,
        },
        {
            course: 'اصول بازاریابی',
            instructor: 'جناب آقای دکتر هادی پور',
            units: 2,
            termCode: '4032',
            status: 'پاس شده',
            midTerm: 5.0,
            finalTerm: 20.0,
        },
    ],
}
const TERM_4040_SUMMER: TERM = {
    title: ' ترم 4040 (تابستان)',
    courses: [
        {
            course: 'تاریخ و تمدن اسلامی',
            instructor: 'جناب آقای دکتر اسفندیاری',
            units: 2,
            termCode: '4040(تابستان)',
            status: 'پاس شده',
            midTerm: 5.0,
            finalTerm: 14.25,
        },
    ],
}
const TERM_4041: TERM = {
    title: 'ترم 4041 ',
    courses: [
        {
            course: 'انقلاب اسلامی و ریشه های آن',
            instructor: 'جناب آقای دکتر اندیشه پرور',
            units: 2,
            termCode: '4041',
            status: 'پاس شده',
            midTerm: 3.25,
            finalTerm: 20.0,
        },
        {
            course: 'تجزیه و تحلیل تصمیم گیری',
            instructor: 'سرکار خانم دکتر الله یار',
            units: 3,
            termCode: '4041',
            status: 'پاس شده',
            midTerm: 3.75,
            finalTerm: 13.75,
        },
        {
            course: 'اقتصاد عمومی 2',
            instructor: 'سرکار خانم دکتر الله یار',
            units: 3,
            termCode: '4041',
            status: 'پاس شده',
            midTerm: 2.75,
            finalTerm: 15.0,
        },
        {
            course: 'استاتیک و مقاومت مصالح',
            instructor: 'جناب آقای دکتر مقصود',
            units: 5,
            termCode: '4041',
            status: 'پاس شده',
            midTerm: 1.0,
            finalTerm: 11.25,
        },
        {
            course: 'علم مواد',
            instructor: 'سرکار خانم دکتر رستگار',
            units: 3,
            termCode: '4041',
            status: 'پاس شده',
            midTerm: 2.5,
            finalTerm: 12.5,
        },
    ],
}
const TERM_4042: TERM = {
    title: 'ترم 4042 ',
    courses: [
        {
            course: 'نقشه کشی صنعتی',
            instructor: 'جناب آقای دکتر محمودی',
            units: 3,
            termCode: '4042',
            status: null,
            midTerm: 3.25,
            finalTerm: null,
        },
        {
            course: 'مبانی برق',
            instructor: 'جناب آقای دکتر قره داغی',
            units: 3,
            termCode: '4042',
            status: null,
            midTerm: 3.75,
            finalTerm: null,
        },
        {
            course: 'مدیریت و کنترل پروژه',
            instructor: 'جناب آقای دکتر محمودی',
            units: 3,
            termCode: '4042',
            status: null,
            midTerm: 2.75,
            finalTerm: null,
        },
        {
            course: 'جبر خطی',
            instructor: 'جناب آقای دکتر مقصود',
            units: 3,
            termCode: '4042',
            status: null,
            midTerm: 2.5,
            finalTerm: null,
        },
        {
            course: 'تفسیر موضعی قرآن',
            instructor: 'جناب آقای دکتر اندیشه پرور',
            units: 2,
            termCode: '4042',
            status: null,
            midTerm: 3.5,
            finalTerm: null,
        },
    ],
}

const TERMS = [
    TERM_4022,
    TERM_4031,
    TERM_4032,
    TERM_4040_SUMMER,
    TERM_4041,
    TERM_4042,
]

const Courses: Component = () => {
    interface TermInfoProps {
        holder: string
        data: string | number
    }
    const TermInfo: Component<TermInfoProps> = R => {
        return (
            <div class='term-info'>
                <div class='holder'>{R.holder}</div>
                <div class='data'>{R.data}</div>
            </div>
        )
    }

    type NumericCourseKeys = {
        [K in keyof COURSE]: COURSE[K] extends number | null ? K : never
    }[keyof COURSE]

    const sumOfTermUnits = (
        courses: COURSE[],
        key: NumericCourseKeys
    ): number => {
        return courses.reduce((sum, c) => {
            return sum + (c[key] ?? 0)
        }, 0)
    }

    const avgOfTerm = (courses: COURSE[]): number => {
        const { sum, count } = courses.reduce(
            (acc, c) => {
                if (c.finalTerm == null) return acc
                acc.sum += c.finalTerm
                acc.count += 1
                return acc
            },
            { sum: 0, count: 0 }
        )

        return count === 0 ? 0 : Math.floor((sum / count) * 10) / 10
    }

    return (
        <div class='courses-page-container'>
            <For each={TERMS}>
                {t => (
                    <div class='term-container'>
                        <div class='term-titles title'>
                            <div class='term-title '>{t.title}</div>
                            <div class='term-infos title_smaller'>
                                <TermInfo
                                    holder='معدل ترم:'
                                    data={avgOfTerm(t.courses)}
                                />
                                <div class='divider'>|</div>
                                <TermInfo
                                    holder='واحد اخذ شده:'
                                    data={sumOfTermUnits(t.courses, 'units')}
                                />
                            </div>
                        </div>

                        <table>
                            <thead>
                                <tr class='title_smaller'>
                                    <th>نام درس</th>
                                    <th>نام استاد</th>
                                    <th>تعداد واحد</th>
                                    <th>ترم گذرانده شده</th>
                                    <th>وضعیت</th>
                                    <th>نیم ترم</th>
                                    <th>نمره</th>
                                </tr>
                            </thead>
                            <tbody>
                                <For each={t.courses}>
                                    {c => (
                                        <tr class='title_smaller'>
                                            <td>{c.course}</td>
                                            <td>{c.instructor}</td>
                                            <td>{c.units ?? '-'}</td>
                                            <td>{c.termCode ?? '-'}</td>
                                            <td>
                                                <Show
                                                    when={c.status}
                                                    fallback={'-'}
                                                >
                                                    <span>
                                                        <Check2Icon />
                                                        {c.status ?? '-'}
                                                    </span>
                                                </Show>
                                            </td>
                                            <td>{c.midTerm}</td>
                                            <td>
                                                {c.finalTerm || 'بررسی نشده'}
                                            </td>
                                        </tr>
                                    )}
                                </For>
                            </tbody>
                        </table>
                    </div>
                )}
            </For>
        </div>
    )
}

export default Courses
