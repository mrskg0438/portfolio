import { RootState } from '@/redux/reducers'
import Image from 'next/image'
import React, { useState } from 'react'
import app from '../assets/images/app.svg'
import { useSelector } from 'react-redux'
import Typography from './Typography'
import Link from 'next/link'



const homeProtfolioData = [
    {
        id: 1,
        title: 'MultiFactor Authentication',
        skills: ['TypeScript', "React Native", "Redux", "Redux-Saga", "Native Base", 'React Native Paper', 'Java', 'Spring Boot'],
        description: `Multifactor Authentication App For Authenticating user using totp code.`,
        cardImage: app,
        isPrivate: true,

    },


]


const Projects = () => {
    const { mode, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    const [isHovered, setHovered] = useState<boolean>(false)
    const ProjectCard = () => {
        return (
            <div className='d-flex flex-row justify-content-center flex-wrap gap-3'
            >
                {
                    homeProtfolioData.map((item) => {
                        return (
                            <div key={item.id} className='d-flex flex-column  '
                                style={{
                                    border: '1px solid #ABB2BF',
                                }}
                            >
                                <div

                                    style={{
                                        aspectRatio: '16/7',
                                        borderBottom: '1px solid #ABB2BF',
                                        display: 'flex',
                                        width: '100%',
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                        alignItems: 'center'

                                    }}
                                >

                                    <Image className='img-fluid rounded'
                                        style={{ width: '19rem', height: '15rem', padding: 2 }}
                                        alt={item.title}
                                        src={item.cardImage}

                                    />


                                </div>
                                <ul

                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '5px',
                                        padding: '10px',
                                        borderBottom: '1px solid #ABB2BF',
                                        maxWidth: '360px',

                                    }}
                                >
                                    {
                                        item.skills.map((skill) => {
                                            return (
                                                <li
                                                    key={skill}
                                                    style={{
                                                        display: 'inline-block',
                                                        padding: '0.5rem',
                                                        color: isDark ? textDark : textWhite,
                                                        fontSize: '16px',
                                                        fontWeight: '400',
                                                        backgroundColor: isDark ? textLight : textGray,
                                                        borderRadius: '10px',
                                                        marginRight: '0.5rem',
                                                        marginBottom: '0.5rem'
                                                    }}
                                                >
                                                    {skill}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className='d-flex flex-column p-2 g-2' style={{ maxWidth: "360px" }}
                                >
                                    <div
                                        style={{
                                            fontSize: 24,
                                            fontWeight: 500,
                                            gap: 2,
                                            color: isDark ? textWhite : textDark,
                                            fontFamily: 'FiraCode'
                                        }}
                                    >
                                        {item.title}<span style={{
                                            marginLeft: 10,
                                            fontFamily: "FiraCode",
                                            fontSize: '12px',
                                            padding: '2px 6px 2px 6px',
                                            fontWeight: '400',
                                            color: isDark ? textWhite : textDark,
                                            justifyContent: 'center',
                                            border: '1px solid #C470DB',
                                            borderRadius: '15px'
                                        }}>Public</span>

                                    </div>
                                    <Typography
                                        fontSize={14}
                                        fontWeight={400}
                                        color={isDark ? textLight : textDark}
                                        textAlign={'start'}
                                        p={'10px 0px 0px 0px'}
                                    >
                                        {item.description}
                                    </Typography>

                                </div>

                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <div className='d-flex  flex-column'>
            <div className='d-flex flex-row justify-content-between align-items-center py-4 gap-1'
            >
                <div className='d-flex flex-row gap-2 align-items-center '

                >
                    <Typography
                        text='#'
                        color='#C778DD'
                        fontWeight={500}
                        fontSize={32}
                    >
                        <span className='' style={{ color: isDark ? textWhite : textDark }}>
                            Projects
                        </span>

                    </Typography>

                    <div className='ms-3'
                        style={{

                            width: 103,
                            height: '1.5px',
                            backgroundColor: '#C778DD',
                        }}
                    />
                </div>
                <Link className='' href={'/projects'} style={{ textDecoration: 'none' }}>
                    <Typography
                        fontWeight={400}
                        fontSize={14}
                        cursor={'pointer'}
                        bB={'2px solid #C778DD'}
                        onMouseOver={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        color={isHovered ? '#C778DD' : isDark ? textWhite : textDark}
                    >
                        View all ~~{'>'}
                    </Typography>
                </Link>


            </div>
            <ProjectCard
            />
        </div>
    )
}

export default Projects