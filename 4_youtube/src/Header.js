import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"

// 헤더
function Header(props) {
    const category = props.category

    const [openSettion, setOpenSettion] = useState(false)
    const [mode, setMode] = useState(false)

    // 세팅창 클릭 이벤트
    function settingClick(openSettion) {
        setOpenSettion(!openSettion)

        if (openSettion === false) {
            setMode(false)
        }
    }

    // 모드창 열기
    function OpenMode(modeStatus) {
        setMode(!modeStatus)
    }

    // 모드 뒤로가기 버튼
    function modeBack() {
        setOpenSettion(true)
        setMode(false)
    }
    
    const auth = props.auth

    return (
        <header className="sticky top-0 left-0 z-10 bg-white dark:bg-black dark:text-white">
            
      <button onClick={auth.signOut}>로그아웃</button>
            {/* 로고, 검색, 로그인창 */}
            <nav className="flex items-center justify-between h-14">

                {/* 햄버거 메뉴, 로고 */}
                <div className="flex items-center ml-4 shrink-0">
                    <button className="hover:bg-zinc-200 rounded-full transition dark:hover:bg-zinc-900">
                        <svg className="w-10 p-2 dark:fill-white" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"></path></g></svg>
                    </button>
                    <a
                    href="#"
                    >
                        <svg className="w-24 m-4 dark:fill-white" viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet" focusable="false"><g viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet"><g><path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"></path><path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"></path></g><g><g><path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"></path><path d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"></path><path d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"></path><path d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"></path><path d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"></path><path d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"></path><path d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"></path></g></g></g></svg>
                    </a>
                </div>

                {/* 검색 */}
                <form className="flex items-center w-full max-md:justify-end">
                    <div className="flex items-center justify-center w-full max-md:hidden">
                        <input
                            className="border px-4 py-2 rounded-l-3xl w-2/4"
                            type="text"
                            placeholder="검색"
                        />
                        <button className="border border-l-0 rounded-r-3xl bg-zinc-100 px-2">
                            <svg className="w-10 p-2 dark:fill-white" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path></g></svg>
                        </button>
                    </div>
                    <button className="md:hidden">
                        <svg className="w-10 p-2 dark:fill-white" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path></g></svg>
                    </button>
                    <button className="hover:bg-zinc-200 rounded-full transition dark:hover:bg-zinc-900">
                        <svg className="w-10 p-2 dark:fill-white" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"></path></g></svg>
                    </button>
                </form>

                {/* 설정 및 로그인 */}
                <div className="flex items-center shrink-0">
                    {/* 설정 */}
                    <div className="relative">
                        <button onClick={() => settingClick(openSettion)}>
                            <svg className="w-10 p-2 dark:fill-white" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path></g></svg>
                        </button>
                        <Setting
                            openSettion={openSettion}
                            mode={mode}
                            openMode={OpenMode}
                        >
                            
                        </Setting>
                        <DarkMode
                            openSettion={openSettion}
                            mode={mode}
                            modeBack={modeBack}
                            />
                    </div>
                    {/* 로그인 */}
                    <Link to="/login">
                        <button className="w-22 border rounded-full px-1 mr-4 dark:hover:bg-sky-900 dark:border-zinc-700">
                            <svg className="inline-block w-8 p-1 fill-blue-500" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,3c4.96,0,9,4.04,9,9 c0,1.42-0.34,2.76-0.93,3.96c-1.53-1.72-3.98-2.89-7.38-3.03C14.57,12.6,16,10.97,16,9c0-2.21-1.79-4-4-4C9.79,5,8,6.79,8,9 c0,1.97,1.43,3.6,3.31,3.93c-3.4,0.14-5.85,1.31-7.38,3.03C3.34,14.76,3,13.42,3,12C3,7.04,7.04,3,12,3z M9,9c0-1.65,1.35-3,3-3 s3,1.35,3,3c0,1.65-1.35,3-3,3S9,10.65,9,9z M12,21c-3.16,0-5.94-1.64-7.55-4.12C6.01,14.93,8.61,13.9,12,13.9 c3.39,0,5.99,1.03,7.55,2.98C17.94,19.36,15.16,21,12,21z"></path></g></svg>
                            <span className="text-blue-500 text-sm pr-2">로그인</span>
                        </button>
                    </Link>
                </div>
            </nav>

            {/* 필터버튼 */}
            <div className="relative p-4 truncate xl:ml-56">
                <div className="absolute h-full flex items-center top-0 left-0 hidden">
                    <button>
                        <svg className="w-10 p-2 bg-white hover:bg-zinc-200 hover:rounded-full transition dark:fill-white dark:bg-black" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g mirror-in-rtl=""><path d="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z"></path></g></svg>
                    </button>
                    <div className="w-12 h-full bg-gradient-to-r from-white dark:from-black"></div>
                </div>
                <div className="absolute h-full flex items-center top-0 right-0">
                    <div className="w-12 h-10 bg-gradient-to-l from-white dark:from-black"></div>
                    <button>
                        <svg className="w-10 p-2 bg-white hover:bg-zinc-200 hover:rounded-full transition dark:fill-white dark:bg-black" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g mirror-in-rtl=""><path d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z"></path></g></svg>
                    </button>
                </div>
                <div>
                    {category.map((item, i) => (
                        <button className="first:bg-slate-900 first:text-white px-3 py-1 bg-zinc-200 mx-2 rounded text-sm dark:bg-zinc-800 dark:first:bg-white dark:first:text-black" key={i}>{item}</button>
                    ))}
                </div>
            </div>
        </header>
    )
}


// 설정 버튼
function Setting(props) {
    const openSettion = props.openSettion
    return (
        <>
        {openSettion ?
            <div className="w-72 py-2 absolute botton-0 right-0 bg-white text-left rounded-xl shadow-2xl z-20 dark:bg-zinc-800">
                <ul>
                    <li><a className="block p-4 border-b dark:border-b-zinc-600" href="#">YouTube의 내 데이터</a></li>
                    <li className="flex justify-between" onClick={() => props.openMode(props.mode)}>
                        <a className="block p-4" href="#">디자인: 기기테마</a>
                        <svg className="w-10 p-2 dark:fill-white" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g mirror-in-rtl=""><path d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z"></path></g></svg>
                    </li>
                </ul>
            </div>
        : null}
        
        </>
    )
}

// 다크/라이트 모드 선택
function DarkMode(props) {
    const openSettion = props.openSettion
    const mode = props.mode

    
    const [theme, setTheme] = useState(localStorage.theme)
    const mainTheme = theme === 'dark' ? 'light' : 'dark'
    
    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove(mainTheme)
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme, mainTheme])

    const [modeSetting, setModeSetting] = useState(mainTheme === 'light' ? true : false)

    function clickDarkmode() {
        setModeSetting(false)
        setTheme('dark')
    }

    function clickLoghtmode() {
        setModeSetting(true)
        setTheme('light')
    }

    return (
        <>
            {openSettion && mode ?
                <div className="w-72 absolute botton-0 right-0 bg-white text-left rounded-xl shadow-2xl z-20 overflow-hidden dark:bg-zinc-800">
                    <div className="flex items-center p-2 border-b dark:border-b-zinc-600">
                        <button className="hover:bg-zinc-200 rounded-full transition mr-2 dark:hover:bg-zinc-600" onClick={() => props.modeBack()}>
                            <svg className="w-10 p-2 dark:fill-white" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g mirror-in-rtl=""><path d="M21,11v1H5.64l6.72,6.72l-0.71,0.71L3.72,11.5l7.92-7.92l0.71,0.71L5.64,11H21z"></path></g></svg>
                        </button>
                        <h4>디자인</h4>
                    </div>
                    <p className="text-xs text-zinc-400 p-4 pb-2">
                        이 브라우저에만 설정이 적용됩니다.
                        </p>
                    <div>
                        <label className="flex items-center px-2 my-2 hover:bg-zinc-200 dark:hover:bg-zinc-600">
                        <svg className={`w-10 p-2 mr-2 dark:fill-white ${mainTheme==='dark' ? 'invisible' : null}`} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M9,18.7l-5.4-5.4l0.7-0.7L9,17.3L20.6,5.6l0.7,0.7L9,18.7z"></path></g></svg>
                        <input
                            checked={modeSetting}
                            onChange={clickDarkmode}
                            className="hidden"
                            type='checkbox'
                            />
                            <span>어두운 테마</span>
                        </label>
                        <label className="flex items-center px-2 my-2 hover:bg-zinc-200 dark:hover:bg-zinc-600">
                        <svg className={`w-10 p-2 mr-2 dark:fill-white ${mainTheme==='light' ? 'invisible' : null}`} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M9,18.7l-5.4-5.4l0.7-0.7L9,17.3L20.6,5.6l0.7,0.7L9,18.7z"></path></g></svg>
                        <input
                            checked={modeSetting}
                            onChange={clickLoghtmode}
                            className="hidden"
                            type='checkbox'
                            />
                            <span>밝은 테마</span>
                        </label>
                    </div>
                </div>
            : null}
        </>
    )
}

export default Header