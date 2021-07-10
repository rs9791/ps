import React from 'react'
import styled from 'styled-components/native'
import {StyleSheet,View } from 'react-native'
import { Card, Paragraph } from 'react-native-paper'
import { SvgXml } from 'react-native-svg'
import Stars from '../../../../assets/star'
import OpenSVG from '../../../../assets/open'
import { Spacer } from '../../../components/spacer/spacerComponent'
import { Text } from '../../../components/typography/textComponent'
import {
    Info,
    RestaurantCard,
    RestaurantCardCover,
    Address,
    Rating,   
    Section,
    SectionEnd,
} from './RestaurantInfoStyles'
 
// const Title = styled.Text`
// font-family : ${(props)=>props.theme.fonts.heading};
// fontSize : ${(props)=>props.theme.fontSizes.title};
// paddingTop:${(props)=>props.theme.space[0]};
// paddingBottom :10px;
// color : ${(props)=>props.theme.colors.ui.primary}
// `

export const RestaurantInfo = ({ restaurant ={} }) => {
    const {
        id="001",
        name = "some restaurant",
        icon,
        photos = [
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGRgaHBgYGBgaHBgaGhgYGBoZGhgaGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCs0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ1NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIARMAtwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EADoQAAEDAgQEBAQEBQUAAwAAAAEAAhEDBAUSITFBUWFxBiKBkROhwfAyQrHRFBVS4fEjYnKCkhZDov/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAApEQADAAIBBAICAgEFAAAAAAAAAQIDERIEITFRE0EiYSNxMhQVgZGx/9oADAMBAAIRAxEAPwD19JPhKECGrifCUIAaE5KEyo+EAOldVKlchx0VuUJiTTHJJoeuPeAmMekoP4kc1Uub8BLZLtIISks+cRfm0GivsvDCXLuOXy8BErhIQw3R5pprE8U9mnBhPMFwuCFl55rnxDzS2PgEzCbCoCoea6KzkthwZdhIsUDbhSteCkS5aHCmknBJAiylKUJQrEJMe8BKo6AhdzXOoCTZNVxL/wDEjmhmK3kN0KpvcRxVOrSc9wlZ1elo56yNrRcwq6gaqxe4tGjdSomWwAQu4qBjtUPakjnUrQZtsRMS5U8VxY5YZ7quTLZUrbcFu26yVVUtSxc6a0ULC7ed3K9TaS6SVn6rzTqFvsj1vX8gJWGHLXJzXk0w4ndJMvtIC46oEMq3oHFU34mOa7FSPUWNpaQbNVL46AuxIc1wYiE+aHwYfNdObWQD+ZAKRt+DsUc0Liw6KoThUQRl6OakbeDmntC4sMh6c2pCEtuxzUjbpG0HE0FCsCuIXSr8QklyJ4GjlKV2EoWpgV7mYQV7XZloXtlUrhkLOlsi1tFFtIRqo6lRjVHXe8zCHVKTgdTust+jmb9BBtXNss34orfDAd1WtsWDKs54osS/yhGVNxodR+OwZh+PBzUVw/GGCWucOiy9bDxTZ14rJXl07MYOi4MSrHXkhS2enYlVY94iJ5hWarC1mi80wXEXB7QTuYXqFWoBRzHlK2mXVOjp6bayGXvrohCal05E676b9cwB5KF9kCNNVi8lJ6Z7vEEOvXc11+JEBT1LBU32aazhwO/zVykp4seJVJ9qoXWxWiykuA2zFhzVpuIz+ZZgUCpmMcFXyC4h/wDmjhxUzMaIhAKZPFWmU9Qh32Divs3GHYlmCSDYZIMJIWR6IcI9dXVxJegecdUdRgO6eo6jSUmJoq13MaOCzl811R0MGnEo5Uw8uMklWqFoG8Fi5qnrwieC+ynZ2xYyEHxUOGwlazKoals07hXU7nQ+KPK8StalU5Q0gcVTPg55C9ZFg3kpW2o5Lnnp/bDitaPH7fwbUa4HkVrrm3eyhDuA1WyNu3kqF/Ra5pbzCr4+Pg1xTKtM8CxRxzuLCQJ4FQ2+MVmbOkdVosewAsqODToSSAgVxhzm7hc/Od6fk998alNMJWviidHtRW2xGk8aEBYp9AhRuaRtok8UV4MnBv20WO2IK4+0CxuH3b2H8Rhai1xZhEP06qHh19mVNr6OvthsE9tp0UmUHVjx6qjduuR+GCEfFX0wTTLYs1NSoCeCzFxiFzsQR2V/BXvc7z5um6qcVN+SuHbZ6NhOB52B2aO0JKTDWuFIakQku+ennXg8fJntU0bpKEklqSdhcXCh91dOZuNOai7ULbHKdPSCK6h1teB2ymqXbWiSew4lRGaa8DcNFqFFUqtbuQhVe+e7bQffFQNKvl6KWP2FHXzeAJTHX/8At+aoSuhwRsrgiy66J4KKo/NwTMy5mRsfFALF/DLa5zfFew9ACPmhr/Bz4gVmu/5NI+YK2EpSsawxT213NZy1K0med33gl5GjQT/sd9DCzV94bqMBLgWgf1Aj57L2glNewEQQCDuDqEnhX0az1NLyeF4ZaAvhxEBGHWDeGy2OMeCKD5dSmk86yz8JPVh09oWJxShc2ZiqyWTDajdWnvyPQrlz4cj/AMTVZprvQ5tnlO6IU4aNys7UxmdlA7FHnZc6x5fY3UmjrX7GavgrQ4Rids9gjKD6Ly2sHulziq+Gvc6q1ocQCY0K7unhwm97ObNbekeqY54oZTblYZOmySi/+FU6tMQ4zpqktPnZyPHWz1i4umsieKla8ESsfWxAvcXctAiVlfSMpK5569On6+jaunaX7DgqDmq13XbEGEOdXLDBBLTsR9VI+i14kgofVVklqUt/sFiUvb8ELcUa05Q1Ual5mcSTJ5DgOXRUMVDWvLGkjTzHiJ4DqmWddv4WjQaE6RPLqUul5pfyPubVE+ZC7XpzXKo2oI1Vm2rsB82nXXTlpxXdPcxrsTsPHSNtTxSLxy9VI7EKe0SOmx/ZQ1q7I0gk8gdJVtL2Sm/QpXQ5VmVhIkiF19UcNu6kei0HLgcqvxxw25pGr1CNhothy5KqfF01C7/FDbQRy3O86H7/AFQGiznUFzbMe0se0OY4Q5pgghMFXqmmrCltFJHlHijwv/DVJaT8J58hP5T/AEn6INUe1jd17Hi9oyvTfTfs4f8Al24I9V5W7Cm5ix+jmktPcLkyUk/y8G63x7eQBUunObEKnSe5rgRuDK3NDw+wjyOC5W8HPOogonq8XhGNYbfds0fhLxR5A13LdcQBmDV6cRTJ7JLmdVv8X2OhKdfkbltQsJBHld8lNRqkGdlM9mdqHhw1a922i87PNYqTnwzadWu/k0lpejSdUQfXgSBI6LGi7DToZCJWuI8itsXUNLszG8OmCLirmc9x3c4u+ek+iay5iPaFDdVNShlzcOAJGp4d+AXoReiuO0GnYiJidt+AaOEnqmHERznus3dViAGgnTjzPE+p/QKA3J9ef7LRZBcEawYqB/mB7jc9E7+Yz0Cxrro81w4ieav5HoXBGyOItBguA9f1THYoGnmJg+YkAnY9AYPrCwT71zjqr1C/JEEy0iCNY5yORHNJZNg4Rsm4tO+h5cDuu/zLl6jmsOy+cI12jVS/xpB0kAgEDlzA6SPor5i4o2f8xA0kGddCPbffp0K4cQa4SHajcTpPIgfYWMZdu5/4UwuIMt0JguHCYgkd4/VDyBwRrXYjA00391JQvc2hOvD+yytK4JO51j+3y0V2lUIHY7d9ws6yDUo1VCpKw3jKk5l1LWmHta711af0C1tq8+U8CQPdCri/pvuHh/5TkH/X+8rLJaS2w00+wDw/Odvmj1L47fyk9lr8GwSmYc5nujNXCGflGUrmfS1kXJaJeeU9NGCpYs9ujgR3CS2lbCwdC0Huksn0V/sr5oMthV18RgIPT1VHxJSLWio3ho5S+ELUh9ZhP4HwtXUw1j2ZHaiQSOy2+PlH9D+RRk7Afwrhv+j8V7fM8SJ4Dghfid/8OWvaNzDoW7MNaABAAgBZDxdbuq5KDGg1KroZJgDKC4kngAAVTxRpSkKcjdOq8Aei8VmlzeEZh3/wVXfQO8bSfXgid34WqWdrUe2s41NHuy+VoDJ0HE7nf2VGxxVpoMqV4LS7IXtGrX8M7Bzicw9l0f6epSX6GrVJue63oHOtjqq7raVsadk17Q9hDmuAIcNiDxB6qJ2FfcJcKX0L5UY42ZUbrLoteMM12XDhPqlxr0Vzn2Yk2BUtC0II7rWuw08k5mFHkhJ+gdyZBlkeWilbYnTRbS3wgBWH4W2IWix01szeaE9GFFmZ2UzLEyPb9YWv/lYCbVtWMaXPIa0buMADuSj46H8q+jP0bByJUbI8uUpzfEdkHZPiD/llcWT0eBB77Ik+7YGhzNQYlxkAAmBpEkngIVzgb+ybyUvontrYEsZO5BPRojXvoh2HYN8PEK1R7P8ATgGm4xGY7wOeiLX5YxjiXecDMwAw7XT20WZZi7qj8gnmSTJAHVcvVN4tzr67fo5Vmp5FKW9mrqeIHNd5QMoOyK2OPMfvoV57Xqlp12Xad1Gsrgw9VmjvvaPSydLLXY9VFQFJYSwxx7eMjkUl2/7hj+0zk/01FTEMXp2d48PMB7WuEcwSP2Wytaksa/mA6OIkaLN3/ggV7g17h+gy5WDpr5j35I892UbxAgK7nh3/AOf6HtUMuLoGZVC1tA6q24edWBzWaxAdoSOsT7ofil8GNc6eiqYPWNUZqjnCk3iJJceTQNT6Lgw1keVWlv0dFzKxvb0jZvrteC1wlpEaan1ndee494RaC99u7TfI6AP+pnQzwK1b8ToNytY1wlwaXOaRl2ADp23GhVuray06t1jqR6L6JfyT+SPNx5njrcM8Xc+pTOQufTI/Lmc3jynaZRKy8UXLD5qxc2dczWOPvErZYhh4Plq087OBgkt7EaoJfeDg7zUCRp+F0wexOo9Vl8VT/i9/o9OOqw32tL+yEeLLkgn/AEY55Dm9swn2RmjjVwWscWMhwkw1446fm5Qs3beHq7HtFamQwuaHHQ8RoI5rXvp3DH/gZ8MBoaJbp1PGdeHIInw3WyepWJJKEi3YVn1CJYAOJ1A+auXLXMBLRPTf5Jls+psWgDnMD0U9W6pM0cZJ3jX9Fv8AxpbZ5zdN9kYCv4wuWVHtNJga0kah8wNiZcI57cV2w8WXtaXMp0i1pgjK+T6h+8FEPEOG1Hv+K0/Fpxl8rRmY3Uw5vEanX3RfDaDLW3yvZqSYbsXE668lnvSb3pI7K+NSmkm2ZfxDi12GtqMqFrI87WtZ5HaTJIJLTz4LK4g2u+HVnOdmAc0ucXNcCBq0yRx4baheqvtWXLS+l5HjRzTs4EcefdDqGA0mZm3DYaRDGAuIaeOTKPKOn2GkrXJPswx5ons57owXh+xa+qGPMA7bRPdenYVaAmC0Gm12bzSS5w467qGw8ONYHuIyAh2TNl8mkAuc0Annx+qnbdiizO8gNa2f+WnDnwVylK7mHUZub7eDK+PKjP4ymDObJleGiSZJLS0acD81SwpjGw5hd5pBJEiQfkFftajX1HXdw+k97muYxnmzsJmCNBG5EjggtnQNHKTWDhtq1wAneCC7X0XndS/k7Lz69nJWXi1UvujTEZ2Qhgq5Dld6I5hbKTWZzU4lxaZjKdRlIGvY6oZj9qytSL6L259xT2fI3AB39F58YH432/8AD1MXXxWtvTZG2vlXUCsbl2WHDUcUkV07T1o7Fafc9XfjefMTMDYDaUHvMZMEAb8ddI5INhV/mohx1zEmDymB+iKMtn3Ly1tWmxjQHPiMzW9GDh1KiJyZLcU22ef1GVYUuC3sz1459w9tJgcS46BsTpuSTsO6IVjWZRFFltWa78LXtI0P9TXA8VS/nrWVjTtqYFI+R1Z0B9SNSQTqZIjTmrVHxOyk0l7i9g2aIzsJP5J/Rd+PHEOZaf8Aa9nnZepy0tU/P0ZG4bVaXUnvcaj3eVmfMQ8GM7yPwx7re4X4gqU6bWVHMrPA1ex2/LOI0d2WSxHEbV9RrqVJzHmSamYF7nEyS4GQfdRMe5tbLnz/ABGl0gZSC38U6kDQzK6cmRpNT/2VhceKPQ2eIHmPIwT3MKT+ZPP5h6AfVYe2xtocWE5gOf0KuXeIhrM7SZ1gb9hK868nUqkuTPRxTjpbSRq6l84gy7T29oQHEscoMkPJc4flbqZ5dFlDi1aq0l7y0aw1gieUu39oQ6q6m0aB8mJ8x347hbzhu3/LW/0htpdpQYb43p5gDSeG8y6SP+oTrrxW9wIpMhsjK7YkRrmBbM+qzrXsMy6OhaJ7TP0UtZoaAWkGd5GkLrWPEnvRi3Ryj4rvGPLm13NI2aGtLT3aQR9U2v4munnNUr1C7WIDconoAI/wnUbAOPkbmdvAOvM6HRMqU2RL2kc5BC3VS1r6I4vey+zxHdNcAHtGYSCOW/mg6Tp7o1g3iN2ctrGCSCHAneIEkrLUKTnasaTlgSdgNdJPUq/bW4LTnnMNxs3ptqVhm+NTpdv6NJT3s399iL30y0PLmuEHtGqwnii6cHMaSTlbpyAnQIrgFyQwtfqNSNDoq3iy2GRroMg68iD039eq4cN0s2qe/orPCeN6Rk62JOnQ8vkr1rfuIAcZ7oLToZnR6+60uDvtmAfGY5+bTKOAmJn0Oy9KpldjyqlLwjQYTiILG5uZG3AbfqiFS5YzzgDNEypK2AspsDqckHzNkzIOoj0TrbCv4ppa12V0S0EaEjhpsvLz4HGRemNdLbnnJjcXsqlMGqw5qTjMgjyFx/CRv6pI3d2T/g1Leox3xmObGmmWdSHDf+6S9BcdHZjzVx/IvYuKdABjdB98OCCvuwHSx+rtPKdXDaDCF2WM5oZWZ8Ru0k+YdjxWnw82jYfTY2eZ1cOmuyqull1yXb2X8rS01sC3YfQrMe0agBzZ2giCP1Qy4DXbOg8jPyIXoT7SlcZczoyzGsb9EAvvDpYW5HteCYdAjKOBKHhcvt4OK4e9mao4W4MNQiYOUDtueqeyu5rHO4ua1un5Wgkkepj/AMrS4nc02MDJEARA+ZPMrmH+HHVM5iG5CGn+ou1EdBA1RcvetbCpa0jGWFc5ng7ZZ/8A01aoXANEz5ttAJJHMR96IJfYNUp1IA8wmY1A01B4HQp9sKtJud7pBIGg0EzEHbgdlnklV3XlfRthzce3s0FhYteYaDkDfKDoZPAqengTXOGZp0mTzB6qi3HmNykN15zEnkN5Ut34ua0ZYIeRI08o5a8Vy6yV4R2/JO9bJL7wvTPD2lDzgbWiOHqVBTxq5P8A9pbEnZsQNSdBrsr1n4xpuBbXEEbOAmRz0GhTrF1Ers9/pErLDemRU8MyCW7dJT7m2e4eaTHPWI5jgpK/iG3LQ5rnnYglrgOwJ0VWr4nZqcneSPc6oUZX309lfJC+x9vQdEGYO/8AdNdSDAXEw1v4j0GuihZ4qET8NsnmZMc9onRAcTxd9Yn8rJ0bz781cYMlV+XZBWeEvx7sKs8ROloDQ1hdxguLRxJ4bjRaGnci4puYGeZ0gOdqGnnHHZZXC/DVxcw4MyM/rdIAHQblamhg77YRTqEzoT159FefBKSc9mjPDdNtV9mXtMJeKpY5p8pOYwQAOh+iPYbh1EVGlznh1OCC2Nwcw3G4Kv3tw2mwkmSBvxcf8qjgj5eC7c6xzJW2Llb2zO8UytfZpq9wfg+SSNfOdeJnXiUL8NXzmPdr5mme7Tx7LW0aDXMGx6cAsvjdq2lUFUTp+Ic2nf23R1eJ3j7eUXgpS9G1OHtrn4uYteeIjbaDOhXEvDl434GZzhE6E7QYhJadPjm8UukY5p1bPBYhWLWpB0JmN0x9qR1UltQMz0+9FptaLSCNLEnt6ngZUFXGqj/zEDkFXcyCo3hCoTkc+qXakoxgXiR9s4NdL6fzb/x6dEDLf7cikGc0haR6wwW12wPnNpu0wexH7p91gNJ7MhbLZBiSNgQNR3XlVrdVKJz03lp6bHuNitVhPjkgAV2x/vbqPVu4+aa150ZvH9oKDAIBZkaBOnEQZ1++amf4dZUbFYAHSCOmxngiFnj9GoPK9pnrt3CuOuWHaOvZLUD3Xgyj/BFKHAVnjMMpgN2BB0njog//AMGdJd8QGBDQWzx0J1AMfQL0D+IYqV/fgaN++iHkiUE4qpnnNzgb6ZzGoSQdi069DqqVnhBeS0lzQ7TgSY11P1W2vqoeNgfvdCDUynhI7acpXO8z+jqnBOu5Nhfhak7Rznb95HAaaRputBYYRbUDmFNhdpqRJ9CZKC0L7JrOv1/ZVr7HQN3Aeuvskst/XkPgjfd9jU3eKdkGvsYa1suP39VlrnHnO0YPU/QIdD3mXEuKaxVT3TB1MrUl+8vX1Xcco2H1PVWbQvEQD9U/CcPzEStjTsKdNoc+Cf6f3XTMaXYwqm33BVpiddo4wPZcvL5zxBJHNS4hiOcQxuUbQhZ0RVLwhzP2yf8AiXNpimCQ0Gcs7nmkqVSp6pKO5p2CGJYA9k6aIK6mWn6L267tWvGrT7H9lkcXwBjpgEf9XfsqrG13RjN+zzuo0O6FVNWmNj8ijl/hhYdiR/xcPohNanzk+hUJ+zUY88wugTxnvv6FRvY4a7j79lxj/UfMKxeR76Z4JuSFMzXtw+9x6KR9ORIHrv8AJAtaKb2DfbqN1NQxG4Z+Co6ORMj5pj6RB1XMyNCTL7fElyN8rvQj6pr/ABJW4ge5VAlMyqeEv6KVNFupj9U8B7lVKmJVDwElObbk7BWqGGE8fVCxz6Hzr2DXVajt3HsNE6jZFx0BK0tlgjdyCfmT2HBaC2wprYECfl/daKfRDr2Y63wdx3B++SK2mAu32A1JK0dd7KbdYmdhuhF3fveYGjOQlD0vIltjmVm0xDNTz+irV7h7jLnen3uonaD70UL6kDU6cVDpspSkSF/+VUrXUQN+nEqP4rnmGbc/2WgwTAMxkiTxJSG2BrXDqlU6ggch9SkvW8JwcN3aElfGiOZo6jUKu6Mou53QqpcDot2jEx+I2QdwWRxPCo1AXod6Y3Czl3iFNxj6T023WFxruaS2YKrQLeirlgnaDzGy2F3ascJbr6IFc2pHBZraNN7BT6cagwemx9EmPI0I15t+oU7qf+EwWxP4TryP3+yaYFqm5x0gEHj8lWubPXy78lboOLR5hw5wnCtOhj1P6Kti0CPgkHVWaNDmrbiCdp6qShlnUx139uRTQmOt7fpoitpQ47dTsOyZTpNG/wCu/wC6bXugNG/29VXgXkKmsxg9uUn9u5/ZUbzFdw3rp978dUMqVnHc+qa0aa+n3zSdeilI4vLtXE69T6z0XH1AFHWrADU+qpFz36MBA/q4ntyWZZLcXYGm7uDRw78ly2sn1DL/APzwRXCcAncdyVtcMwZrY0TSb8Et68gLCsEIjRbPCrDIRorFCz6IpQowtJjRlVbLVOk2NklI0JLUgTmqN7U11xp+H2P9k0XE8Pc/2TJKlzbg8EIu8KYdcoWgeTyHuqddp5KaQ09GSv7DXT2QG5syZ+/ZbmvbSUOuMPnj+qxqfRrNHntzankqT6fRbS5tZ1j9UIuLPosjRMBOqmCHa6b8fXmqzWhFK9qqFW1I1TTAbm9E5j47fqoS7LuEm1Z0Vf0BftqxLdZjNt3AUmg/bZV7fQaa7yeAOidVqhupOvzlHkESkcTvHsq1W6/K0S7psO5XGU31DAlrfmf2Wkwjw7MSIHZLY9gKywtzyC/XpwC12G4KBEhHrHBmtA/ZEW2oG36KlLfkzdeirZ2YHBGbe36KClTjp6FEaDT9haytENkjKfRWGNTWtUrWKySQBJdaxJLYFJrE4M5hPEJJkjHNHJQVWDkVYIUTwgAfVpqnWpolUaqddmh7H9EmikAXUdNv0/dUri1CPPodT7qpUp/crKpLTM1Wsx0Q65suy1L7fXf5qlWtfuVlotMyFxZ9vYodUtyFrri0+5Kpuw6fspJ6K8gJmaA1jdZ1J2Htur9hgrnGXGTzP0Rq1wkBGba2jgm22Hghw/Bg2JHyWktLUDYfJR27DA0+SJUGjitJkyqmyWnR7exUponp7FPpgfcqYD71WiRJDTpKwwdE5rFI1ipCHtClYUxoTmt+5TAkBSXAuIArwuErsrh7IAaSoSVK4HomFnVAEL2qrVb2V11FV30uyAKz2dFWfQ6BEnUwoHUh0UMaBr6PZVn246fJGHUe3so3UPuFDRSAn8EDx+Se21ARc0Vz4KniPYKFDurFO36FX20fuVK2kmpBsip0+hH33VumO/36p7Wfcp7Wd1aIHsPdSMPVNaFK1qsQ9qkamNCkaEwHtTkxoTwOqAOtSXWpJAQLhXEkwEFwpJIA4U17ByXEkAQOCY9g5JJKWMicuJJKGM4mpJJDOQntCSSaAcFM1JJWiSZqe1JJNCJmpySSYHVI1cSQBIkkkkB//9k="
        ], 
        address = "100 some random address",
        isOpenNow=true,
        rating = 4,
        isClosedTemporarily=true
    } = restaurant;
    
    const ratingArray = Array.from(new Array(Math.floor(rating)))
    console.log(ratingArray)
    return (
       
            // <Card elevation={5} style={styles.card}>   
            <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                <Rating>
                {ratingArray.map(() => (
                    <SvgXml xml={Stars} width={20} height={20} />
                ))}
                    </Rating>
                    
                    <SectionEnd>
                    <Spacer position="right" size="large">
                    {isClosedTemporarily && (
                        <Text variant="error">CLOSED TEMPORARILY</Text>
                        )}
                    </Spacer>                                                                         
                            {isOpenNow && <SvgXml xml={OpenSVG} width={20} height={20} />}                                                                            
                        </SectionEnd>                     
                </Section>
                <Spacer position="top" size="small">
                    <Address>
                        <Text variant="caption">{address}</Text>
                    </Address>
                </Spacer>
            </Info>
            </RestaurantCard>
         
           
    )
}

// const styles = StyleSheet.create({
//     card: {
//         backgroundColor : "#fff"
//     },
//     cover: {
//         backgroundColor: '#fff',       
//         padding: 20,
//         paddingBottom: 5
//     }
    
// })


