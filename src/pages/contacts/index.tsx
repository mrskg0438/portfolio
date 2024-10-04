import { emailIcon, linkedinIcon, telegramIcon } from '@/assets/Icon'
import Typography from '@/Components/Typography'
import { RootState } from '@/redux/reducers'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'


const contactData = {
    text: `I’m interested in freelance, remote, on-site opportunities. However, if you have other requests or questions, don’t hesitate to contact me.`,
    socailAccounts: [
        {
            id: 1,
            name: 'Linkein',
            icon: linkedinIcon,
            link: 'https://linkedin.com/in/shwetkamalgaud',
            text: 'Shwetkamal Gaud',
            isEmail: false
        },
        {
            id: 2,
            name: 'Email',
            icon: emailIcon,
            link: 'gaudshwetkamal0438@gmail.com',
            text: 'gaudshwetkamal0438@gmail.com',
            isEmail: true
        },
        {
            id: 3,
            name: 'Telegram',
            icon: telegramIcon,
            link: 'https://t.me/mrskg0438',
            text: 'Shwetkamal Gaud',
            isEmail: false

        },


    ],
    socailAccountsTitle: 'Message me here'
}
const ContactsPage = () => {
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    const { text, socailAccounts, socailAccountsTitle } = contactData;
    const router = useRouter()
    const Header = () => {
        return (
            <div className='d-flex gap-2 flex-column w-100' >
                <div className='d-flex flex-row align-items-center w-100 justify-content-between gap-2 pt-5'>
                    <div className='d-flex flex-row gap-2 align-items-center'>
                        <Typography
                            text='/'
                            color='#C778DD'
                            fontWeight={500}
                            fontSize={32}
                        >
                            <span style={{ color: isDark ? textWhite : textDark }}>
                                education
                            </span>

                        </Typography>
                    </div>
                    <Typography
                        fontWeight={400}
                        fontSize={16}
                        onClick={() => router.back()}
                        bB={'2px solid #C778DD'}
                        cursor={'pointer'}

                    >
                        {'<'}~~ Back
                    </Typography>

                </div>
            </div>
        )
    }

    return (
        <div className='container-xl'>
            <div className='d-flex flex-column pb-5'

            >
                <Header />
                <div className='container row gap-2 d-flex align-items-center'>
                    <div className='item col-xs-12 col-md-6'   >
                        <div className='d-flex flex-column gap-3 py-5'>
                            <Typography
                                color={isDark ? textLight : textGray}
                                fontWeight={400}
                                fontSize={16}
                            >
                                {text}
                            </Typography>
                        </div>
                        {/* <ContactForm /> */}
                    </div>
                    <div className='item col-xs-12 col-md-6'>
                        <div className='d-flex flex-column justify-content-center align-items-md-start align-items-xs-center'>
                            <div className='d-flex flex-column gap-1'
                                style={{
                                    border: '1px solid #ABB2BF',
                                    padding: 10,
                                }}

                            >
                                <Typography>
                                    {socailAccountsTitle}:
                                </Typography>
                                {
                                    socailAccounts.map((item) => {
                                        return (
                                            <a className='d-flex flex-row align-items-center text-decoration-none'

                                                {...(item?.isEmail ? { href: `mailto:` + item?.link }

                                                    : { href: item?.link, target: '_blank' })}
                                            >
                                                <Image className='sidebar' src={item?.icon} alt={item?.name} />
                                                <Typography
                                                    fontWeight={400}
                                                    fontSize={16}
                                                    color={isDark ? textLight : textGray}
                                                    component="span"
                                                >
                                                    {item?.text}
                                                </Typography>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default ContactsPage