import CarouselNetflix from "./CarouselNetflix";
import '../styles/css/netflix.css'
export default function NetflixContent(){
  const populars = [
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABei8IL-UhLw3Po02642EcjViVtyxeZmJL2yl5mNSjchhDdlFcB4xq4GkItT2US_r042La0gvQkuVb3lyKNlLEo9sF8msK3mMRH1eCP44wEFcW9GMdRm4qnl61Evnd0PNlB9gI0jqc_zJEslNYopN7TSf2co2r334GhJkgLO0MEpvkeupZlUeR0NsF2chIgykDIEbfUzcPNoDnQeCxG2Xq1KbBxavWeFkGoKu68ae_UQZ3leWldzCfQ9_1yEzVJR5zVWd1TDH0pt4UHFGKYyD0qpVUBTloAc.webp?r=94c', alt: 'image 1'},
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcv8A0o9tirJ8NhzsYfoLchVyd3pB_d_oSfdEJ84R1fPbDb8T4cWGHJWRA8K68q9Xf2-RkHFXX29ZJMiLhECndhuSSkOSWEs-GzKrEvCe2Khe0ydMNXOnvChDpMgIBBpHipu5Ed86IZfBP-ydjSKt2sUz7sOnOasEF6mffSnkIdvYZoUArdp4dHlCnH--Osexa4mUzcQNavhWxM4LuplF6wJE97wBwOBM6u55-oYnfZHQzd-hKoMCeEeZsco9yAxLNV1BmfheR1mhM8bIQhW43UV7HDcw9I.webp?r=593', alt: 'image 2'},
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS8Z0mDHXMKX8ktZpUPm2Ntm4azDSKk8smLmniYMxrDigzlYxgho48Xc2AWfP0iz5oQ7spRqSCRWomdKq1HpsE5EGzHnd-pBqbQKWEU1f_Vk8kUJ8hbq_p9kDVFJ1nEDct_nSDuzuoBOdY7hswkAga0_WjDS3hzAswaTN3G49UIsrZRnkbExT1OJYataNWTuSuuibkIs3LqLhPCpCnRk3jnca5D-m4NHKpX79axP8OwdCtw7_N2kuxvn_BiQeZgoKA_7m6SoUF9ALnPEF6G9Qnlu5BWO3I0.webp?r=567', alt: 'image 3'},
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXuwIwSU9NJXrR7Kq_0_qBbBPaYxX8YJdSYzDWrPbIbWFXtZVxomkATLn949tVYDBKTuhYuW0Lo6uBiq4cAqXoxWNPxtq_pgw1VcgQWqryj3_fHUF4SJp7YxOjxqKlmbqQjcxIjXNp4GWgD6qELew9MvqGwUPHvXvIYs5gDo4rE0URn_-7ycVeEabkbwVnvWJLi4-Eg0dg2W4QpmAeEH0GDBOUlKG5VYhyzcH4B1VlgGdq5yCCjyJ3cvuUN7msZ6Vtq06egx4I8IhNIeojY43pblyoi1PHc.webp?r=cf4', alt: 'image 4'},
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQCqv6CB8JO9YKOrDHaaN35mNQ_fIT0ssymzi1DpMnU6ZTfHudM4Lc7wHhrNgtncS-GHo4jkb8D5XADrdeRl_VoljdK2qDWKABSZUbs3m8scxyRCmCmJGiD16SEBKYcQlttg.jpg?r=c00', alt: 'Arcane'},
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb_mbXLu3Endhn76x3epNrlyFBFJ8-fz452LhXPKED8UPioFVxAi805kXYiqgvW8AvaqthUZGzcCZinf3-PTxkpEtsPZ-Rz4XBYamW_BF_7_xRS96lHJOakbfhLtih-tH9tY.jpg?r=90c', alt: 'Seven Deadly Sins'},
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ27alvhNRZKSLYruRhwKgPQWAJXZy7OpDelg2tFH9-aKinKUYZ4IAF4CN8hsg52SW0fE4LzGeotUSjwWotzR-UYN1W1GJQGx-QxPHT2M57QI49lRnxnYNJvPwxwDfR1UDofuM2P-ZJIvXqXwBNC_kLyAwYx-jxPOPtCHlm8JGYMc0KPQ1lOUS8Kn-mWHA6QDP09H3JSlxxZCAIRnyRR0BS2QZOGHIoqnMVTYGJQMDdcq1_tCiYmJzdRxx4OkHjKKe9uvmLa8tR52QVKUMtfCbwMWB8C4M8.webp?r=56d', alt: ''},
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABW-Ys0umfUjNYZluupIgDhOXYcaHJjUgU4G9Rlnvx8uECVM1z9_iEF8pLjQej1_CiFO1boDMLQBXFzUWznGPCpVgAylqcri8KcvWyM-rvw8DOUeMcThZNOnfRR5XwWdtYc-03TIn-gYgylBvMTXsBzpDpGAwTKUys3fRG6Xfo8E4Cw-3loZKGoO_R5xncniniNbMyEvqmse513VdfL4emVGj2FKlYvuQrwtQP1ZmAexwmVIsLH-marB_RSlDPhdNx6QLWocRHvPUFvOm7PDoehPQOknMb5TTfmpI9-4irKai3a7VUFpf8ze5Fkgc0WLPUawdAa55Fgj4l1cSJC4zuO9uX3ng69SujiEGqowJ1HzpUyk9xj57iYJHPSWIQajwrO3UvJrMcQmSXl2glrYeEKFEW2nRWGhJpG2kxdDe4aZzc19Y1k5oEwABDR1Cv1QzGIqeoZzuZQdrRD1PTYGxdr_4BwBa5F4m0WamgEVeufJuX6H8b9hp4l_SL5uyeEw1r9d1Q-s.jpg?r=f86', alt: 'Reina de lagrimas'},
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVBVYCa586CVsv1wISSEWKkB5sRC__FGBcCZ3IsTm5knxLHvak2i3_Hf9dQs42wQ9dAN8LX_OodSIVstsmaBuAmk-kmM3-Snh5E.webp?r=8f1', alt: 'Belleza verdadera'},
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXGJCIUJ3-AGUBj1gQjhsj6enOGITlMApXXY--uU7F4Z2NRNCj-23PZXTqiyVSemJLIduSQsMezaxDlwAEBicZ_iMTf5ufl9Fm1uR3vChzapSxbtf_0iFc_3bsqQwNXxg-UyMJNtGlVnhLcAcRLLrz1UQto7Ldx4Jk8U8V5o9vQZtVaXUoFZW2OI_uXGSOBKDZNAGl3kGkolyrdU21JB37khsoDHiPFWNcR8ScRYAqz-RpXfAr4Y_AWjNNBdNphDVWgt1mYsWUhbDfGCrzDk2HRLaVU4.webp?r=790', alt: 'Suzume'},
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbrsdE6EvWWvJhCOVPq4oj-HKxYuoWFvk2exRQECqyfoEvxQv7pMeBUxmWUSD8QtYwDr7budKdvlBE3pj5suoUSiht_SQ7xRzsJ0KETdIfCwYT1DUgMrEH1Jp3ojf0y_LmH38N-IOGgQJs9il1hWYqI6kpf_BUDcXF-mx04UAw7P11tlALNnhdfSad6X_mu-KdJ25FniJcTPjaMFyPf5WFevZd1Ssj7u8MwpUh_6VRQFl7z73OoroxGtNGrtUoCUAOWHKIM0XAiPwu2rK3cvjdp27gw4wQn-twAsl7QPbPahOdIQYxTiGVx_IJT85NOUY0BjourNM6kgqAayZCo-d4wYc2nZduzFXeKir4S9heORhyR-IZY.jpg?r=986', alt: 'Parasyte'},
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUz5Y4OhzS8yE4rEPoxBI5UHb63nhAhZyx1AXbK7CYSpG0bG40Jqz9X4eYDIV_WVRT9C3sIZJ0jw9tFMLaVYbGpaAWRKP8tTwGmH8wfX6cVi5vRy_4ifGSSU3h3p15GDChELs_7TwB-Jjk-O8Km1wftgjQGVrNBreRvIpUzS15nGLN2aquMnc7FCqeUcsmkfRMOeBcOf08JzgO9dxkWzg1pt11YThj9l37bR7AuMy9oeMuGe9JCMZAE0Dbe14jXDurU4K--C1FUVbW2dPmPMz2Job4VSzDSuu5G77bn-H_UL5OBllZR_3sqw.jpg?r=524', alt: 'Rebelmoon'},
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABe9u0MfXau6hIjEoeE48IxAmwXjEnbYbCk5mlPA4Y1fLvENTeZ3CAD5giKQaamh8viznjv2n7FygoP_YYybNUcmvm-TnuTsWhoLIeKJceFkbCrJk3871ovdvsbkxa-uZKMl4.jpg?r=400', alt: 'Alice in Bordeland'},
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUPjUTYxhhMaf67O-cq594pS8h5_X40meDq_SluYK92OASHGJ34whT1UUXslBHJFC-UuoaV7oQBQ6Dj-ktXsiEBtt6bHBxK-6hY.webp?r=295', alt: 'Naruto Shippuden'},
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABewTGEanXYWqbzgZT8zBPC9FmmHIHnoM1rxFzfAOmVYKdvfzSjGfTTKbmvBxlj8-KJ9cMUq5LHfuZ3nEBJXrHeNR4mVR0LBeEn9wtX1gxXpBu1vzsXDwNm467OeRskEIhQ2LxJumEEHO75_13fsXz2GKjvxonwDqepVgqeTrUaz-5SnObf5lbUHOtgfTbhV1rrpX8bqYbgvjDjGhCPA81TSvNup8S1NIUunq-z1WS61_7FI2p10Iydrhvni97sdqWa0DTbZquk2Isoc6m-ItdSH_k6TdaSS-R_PcfhBWPTkqXVUQ0lAbK-LIPfmDrzNSSQhrEmII8wvsQVizULfFIEbVvFRqfw3wLL191doYjDSFHnAOF5Grt7wUzY9VbejdhMaY5Eco8W7UPQ579K-FLlbAAqoN-FSWGFl6s5u998nCJyU53ZZxlJAPe8EfqCVFK185-C3Jcw.jpg?r=34d', alt: 'Bridgerton'},
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRcPN0QlBFemyXiOLqUHaicdXrSgG3ptqQ6DhOjtmoP9Pq5NkFlmtrMf9ZxDOeivODA7tbnO8pB3upZkWa8rVV45uO9LRZOcSW4.webp?r=27e', alt: 'Demon Slayer'},
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABe9oSPxz1kvPl9s5GArm21QSuu-qhZ3IF-zAmQwSxgP5302PW8yGSrX0P_ywrU6RKxgeF7OiRFMG_th6WfAnh79qJjrytRh8zck.webp?r=bc9', alt: 'Death Note'},
      {image: 'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZaYmsIIjciQBv6JD4fm8bgBceeaRdypM_z-T3SYRGklwnSMKMZGuFXVL-kQGNs9VdXYKic3fcDAZTYNkHSeemlnn5J_EzeeDoCG-dsNectTV6XrYbG0ef1gcokVFalDyZAx.jpg?r=a07', alt: 'Peaky Blinders'},
      // {image: '', alt: ''},
      // {image: '', alt: ''},
      // {image: '', alt: ''},
      // {image: '', alt: ''},
      // {image: '', alt: ''},
      // {image: '', alt: ''},
  ]
  return(
    <section className="pt-12 background-section">
      <section className="relative flex flex-col py-5 px-14 gap-y-2 -top-48">
        <h1 className="text-xl font-semibold">Imaginate TV Shows</h1>
        <CarouselNetflix populars={populars}/>
      </section>
      <section className="relative flex flex-col py-5 px-14 gap-y-2 -top-48">
        <h1 className="text-xl font-semibold">Imaginate TV Shows</h1>
        <CarouselNetflix populars={populars}/>
      </section>
      <section className="relative flex flex-col py-5 px-14 gap-y-2 -top-48">
        <h1 className="text-xl font-semibold">Imaginate TV Shows</h1>
        <CarouselNetflix populars={populars}/>
      </section>
      <section className="relative flex flex-col py-5 px-14 gap-y-2 -top-48">
        <h1 className="text-xl font-semibold">Imaginate TV Shows</h1>
        <CarouselNetflix populars={populars}/>
      </section>
      <section className="relative flex flex-col py-5 px-14 gap-y-2 -top-48">
        <h1 className="text-xl font-semibold">Imaginate TV Shows</h1>
        <CarouselNetflix populars={populars}/>
      </section>
      <section className="relative flex flex-col py-5 px-14 gap-y-2 -top-48">
        <h1 className="text-xl font-semibold">Imaginate TV Shows</h1>
        <CarouselNetflix populars={populars}/>
      </section>
      <section className="relative flex flex-col py-5 px-14 gap-y-2 -top-48">
        <h1 className="text-xl font-semibold">Imaginate TV Shows</h1>
        <CarouselNetflix populars={populars}/>
      </section>
      <section className="relative flex flex-col py-5 px-14 gap-y-2 -top-48">
        <h1 className="text-xl font-semibold">Imaginate TV Shows</h1>
        <CarouselNetflix populars={populars}/>
      </section>
    </section>
  )
}