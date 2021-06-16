import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { Access } from 'src/Model/Access';
import { Activities } from 'src/Model/Activities';
import { Gym } from 'src/Model/Gym';
import { Open } from 'src/Model/Open';
import { SideFilter } from 'src/Model/SideFilter';

@Component({
  selector: 'app-gym-cards-list',
  templateUrl: './gym-cards-list.component.html',
  styleUrls: ['./gym-cards-list.component.scss']
})
export class GymCardsListComponent implements OnInit {
  @Input() searchedName!: string;
  @Input() searchedLocation!: string;
  @Input() sideFilter!: SideFilter;

  show(gym: Gym, searchedName: string, searchedLocation: string, sideFilter: SideFilter): Boolean {
    return (this.searchByLocation(gym, searchedLocation) && this.searchByName(gym, searchedName) && this.searchBySideFilter(gym, sideFilter));
  }

  searchByName(gym: Gym, searchedName: string): Boolean {
    if (searchedName === undefined || searchedName.length === 0) {
      return true;
    }
    const name = gym.name.toUpperCase();
    searchedName = searchedName.toUpperCase();
    if (name.startsWith(searchedName)) {
      return true;
    }
    return false;
  }

  searchByLocation(gym: Gym, searchedLocation: string): boolean {
    if (searchedLocation === undefined || searchedLocation.length === 0) {
      return true;
    }
    const location = gym.location.toUpperCase();
    searchedLocation = searchedLocation.toUpperCase();
    if (location === searchedLocation) {
      return true;
    }
    return false;
  }


  private searchBySideFilter(gym: Gym, sideFilter: SideFilter): Boolean {
    if (sideFilter === undefined) {
      return true;
    }
    const sideFilterActs: string[] = sideFilter.activities;
    const gymActs: Activities[] = gym.activities;

    const sideFilterAccess: string[] = sideFilter.access;
    const gymAccess: Access[] = gym.access;

    const sideFilterOpen: string[] = sideFilter.openOnWeekends;
    const gymOpen: Open[] = gym.openOnWeekends;

    if (sideFilterActs.length === 0 && sideFilterAccess.length === 0 && sideFilterOpen.length === 0) {
      return true;
    }

    if (sideFilterActs.length > 0 || sideFilterAccess.length > 0 || sideFilterOpen.length > 0) {
      for (let i = 0; i < sideFilterActs.length; i++) {
        for (let j = 0; j < gymActs.length; j++) {
          if (sideFilterActs[i].toUpperCase() === gymActs[j].name.toUpperCase()) {
            return true;
          }
        }
      }
      for (let i = 0; i < sideFilterAccess.length; i++) {
        for (let j = 0; j < gymAccess.length; j++) {
          if (sideFilterAccess[i].toUpperCase() === gymAccess[j].name.toUpperCase()) {
            return true;
          }
        }
      }
      for (let i = 0; i < sideFilterOpen.length; i++) {
        for (let j = 0; j < gymOpen.length; j++) {
          if (sideFilterOpen[i].toUpperCase() === gymOpen[j].value.toUpperCase()) {
            return true;
          }
        }
      }
    }
    return false;
  }

  gyms: Gym[];
  constructor() {
    this.gyms = [
      {
        id:1,
        imageUrl: 'https://www.ecoles.com.tn/sites/default/files/club-sportif/logo/california-gym-logo_2.jpg',
        name: 'California Gym',
        location: 'Centre Urbain Nord',
        activities: [{ name: 'Swimming', value: 'Swimming' }, { name: 'Zumba', value: 'Zumba' }],
        access: [{ name: 'Mixt' }],
        openOnWeekends: [{ value: 'Yes' }]
      },
      {
        id:2,
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.x8FfI4eM1mTfW_14x6GyIQHaE8%26pid%3DApi&f=1',
        name: 'Oxygéne',
        location: 'Aouina',
        activities: [{ name: 'Musculation', value: 'Musculation' }, { name: 'Yoga', value: 'Yoga' }],
        access: [{ name: 'Mixt' }],
        openOnWeekends: [{ value: 'Yes' }]
      },
      {
        id:3,
        imageUrl: 'https://www.ecoles.com.tn/sites/default/files/club-sportif/logo/california-gym-logo_2.jpg',
        name: 'California Gym',
        location: 'Centre Urbain Nord',
        activities: [{ name: 'Aerobic', value: 'Aerobic' }, { name: 'Yoga', value: 'Yoga' }],
        access: [{ name: 'Women' }],
        openOnWeekends: [{ value: 'Yes' }]
      },
      {
        id:4,
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.x8FfI4eM1mTfW_14x6GyIQHaE8%26pid%3DApi&f=1',
        name: 'Oxygéne',
        location: 'Gammarth',
        activities: [{ name: 'Aerobic', value: 'Aerobic' }, { name: 'Yoga', value: 'Yoga' }],
        access: [{ name: 'Men' }],
        openOnWeekends: [{ value: 'No' }]
      },
      {
        id:5,
        imageUrl: 'https://www.ecoles.com.tn/sites/default/files/club-sportif/logo/california-gym-logo_2.jpg',
        name: 'California Gym',
        location: 'Lac',
        activities: [{ name: 'Squach', value: 'Squach' }, { name: 'Spinning', value: 'Spinning' }],
        access: [{ name: 'Women' }],
        openOnWeekends: [{ value: 'No' }]
      },
      {
        id:6,
        imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
        name: 'Fitness Gym',
        location: 'Tunis',
        activities: [{ name: 'Squach', value: 'Squach' }, { name: 'Spinning', value: 'Spinning' }],
        access: [{ name: 'Men' }],
        openOnWeekends: [{ value: 'No' }]
      },
      {
        id:7,
        imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVEhUSFBIZGBgSGBIYGRUSGBYaERISGhYZGRoYHRkcIS4lHB4rHxwaJjgmKzE0ODU1GiQ7QDs0Pzw1NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAABgUHAQMEAv/EAEcQAAIBAwEDBBAEAwYGAwAAAAECAAMEEQUGEiExMkFRExYiNVJVYXF0hJGTsrPR0gcUQoEzNsEjYnJzgqEVFzRDRLElkvH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A2BtRqN3TqW9GzWgXuDV43XZNwKi7x5hBzMdva94Gm+26+syusd8dP9c+TKGBE72veBpvtuvrG9r3gab7br6y3iBEb2veBpvtuvrG9r3gab7br6y3iBEb2veBpvtuvrG9r3gab7br6y3iBEb2veBpvtuvrG9r3gab7br6y3iBEb2veBpvtuvrG9r3gab7br6y3iBEb2veBpvtuvrG9r3gab7br6y3iBEb2veBpvtuvrG9r3gab7br6y3iBEb2veBpvtuvrG9r3gab7br6y3iBEb2veBpvtuvrG9r3gab7br6y3iBEb2veBpvtuvrG9r3gab7br6y3iBEb2veBpvtuvrG9r3gab7br6y3iBEb2veBpvtuvrG9r3gab7br6y3iBEb2veBpvtuvrOmpqWrUalA3SWPYqtalSY0PzBqjfbHDebHtl7JvbTmWnptn8ZgUXGJ9RAndX746f638qUUndX746f638qUUBERAREQEREBERAREQEREBERAREQEREBERAREQEREBJvbTmWnptn8ZlJJvbTmWnptn8ZgUkRECd1fvjp/rfypRSd1fvjp/rfypRQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEm9tOZaem2fxmUkm9tOZaem2fxmBSREQJ3V++On+t/KlFJ3V++On+t/KlFAREQEREBERAREQEREBERAREQEREBERAREQEREBERASb205lp6bZ/GZSSb205lp6bZ/GYFJERAndX746f638qUUndX746f638qUUBERAROMz5ZwBknA6zyQPuJ51ukJwKiknhgMuSfNmd+YHMT43xnGePV0z7gIiICIiAiJ8MwHEmB9xPlWB5DnzT6gIiICIiAiIgIiICTe2nMtPTbP4zKSTe2nMtPTbP4zApIiIE7q/fHT/W/lSik7q/fHT/AFv5UoYHMwm0O0lvZJv16oXPNQcatQ9SqOJ8/JPJthtQLNERENW4uDu0KC8528I9SjpMxuzGxu5U/O37C4vH47zcaVAeAi8gxyZx145eIeOnqGragM0KS2FBs4qXA37p14YZUOAvD/3ynlndS/DZH43d7dXLHl36rImfIoJwPJmXoE5gSWnfh7YUKqVqdAh6bBlYu5IYch4njKwCcxAhdutKq03TVLIE17X+JTGd25t8d0pA5WA5PJ5hKbQNZp3dulxRbK1BnHDeRv1I3UQeEyRE1ndA6Lf9lUYsL9/7QdFrdHPdAHkQ8OnkyOGBkNnROum4IBByDggjkIPETsgIiIHBM15tlqFS8uV0a0YrvAPd10P8CiMHcyP1NgZHlA4gnGa242l/J0AKY3ri4bsdvSAyzVDw3iOoZH74E+tidm/yVA77b9xXY1K9UnJeqeUA9Q4/7mBm9MsEoUko0xhKahVHKcDpJ5SSeJJ5TPbEQEREBERAREQEREBJvbTmWnptn8ZlJJvbTmWnptn8ZgUkRECd1jvjp/rnyZldUvkoUaleocJSRnY9SqM8B0nyTFax3xsPW/kzBfiXVas1lpiHBv6w7JjORb0yrP8AX/SYHzsDpzXFSprVyD2S6yKCtyULUHC7o6CwGc9Rz0nOwAJ1W9JURUUAKgCqByBQMATugIiICIiAng1fTadxRehWXeSqpVl/3BHUQQCD1gT3ziBr3YrUKlpcNo122TTGbSqf/ItuOE6t5R0eQjoBOwgZK7cbM/nKAakd25tzv29UcGWoOO6W8FiB5jgz62H2l/OUCKihLmgSlxSPApUBI3gPBbl8hyOOMwKmY/V9Sp21F7iq26lJSzHp4cgA6STwA8s9xOBNZXDnWb/sSk/kNPfNRh/DvLgci55CowePHh5wYHt2I02pdV21m7UhqoK2tI8lC2zwbHhMM8fKT0ibCnWiAAADAHAADAA6sTsgIiICIiAiIgIiICIiAk3tpzLT02z+Mykk3tpzLT02z+MwKSIiBO6x3x0/1z5MwTE1dpADyWtmSvkao3E/7zO6x3x0/wBc+TMJZPu7R3Cn/uWdIjyhXgXgnM4E5gIiICJwTEDmIiBwRNe7a6c9ncDWbRMsgC3VJeSvQ4AtjwlAHHyA9Bmw51uoOQRkHgQeQg8MQNdbT7Um9FDT9OfNS/UO9Vf/AB7U84t4LEAjHR5yJabP6PStLZLeiMLTGM9Lt+pz1knjIf8ACyzo0W1R1RUFK7rU94nASihyFyeRRxM2PQrK6h1YMrAEMpBVh1gjlgd0REBERAREQEREBERARE4Jgcyb205lp6bZ/GZmal9TV1ptUQO2MIWUOc8mFJyeQzDbacy09Ns/jMCkiIgTusd8dP8AXPkzA7Wv+W1jTbwjCV+yWtRugFiOx585PsUzPax3x0/1z5M4240Q3llUor/EUb9I+DWTul49GeT94FEJzJrYbX/zlmjtwq0806ynnLWTg2R0Z5f3lLAREQPFqtma1GpSFR6ZqKyipSJFRCf1KRyGRf8Ay6rePL/3r/dNgxA19/y6rePL/wB6/wB0f8uq3jy/96/3TYMQNfH8O63jy/8Aev8AdPBsTZ1k1i6pG+ubijZ01Qm4qOyNcVN04CkkdyAw68iWu1etpZWlW5f9CncXw6h4Iv7n/bMxn4d6O9vZ9krfx7t2r1j0h3OVX9lxw6yYEloo/wDjtovSNS+Azz/hFtI9Jl065yoqqlW2ZulWUtuDyHlXzET0aL3u2i/z9S+BpxqezDXOiWF3QyLmzt6Toy8rqqhyvlYEby+UeWBtsGcyU2B2oW/tEqEjstPCVVHRUH6h5GHEfuJVwEREBERAREQEREBMZreq07W3qXNVsLTUseIyx6FHWSeA88yRmodo7h9Z1NdOosRa2jb1w4PcuwbDYI5elV8pJ6IErod5XuNbs724Uj81VLUwc4FJQyADP6RjGenBM3JtpzLT020+IyL2ptkp6/pNNFCoiBVVeRVBYAS0205lp6bafEYFLERAndX746f638qUJEntX746f638qUUDXW0thV0+7bVrRC9OrgXluuMlAP4yDrGOPlPUSRaaPqlK5pLXoVA6OMhhyg9RB4gjkIPVPcyg8v8AvIG/2Sr2dVrrSHVN7jUsn4W1Y9accI2OjyDiOQhsAGcyI0n8Qrdm7DeI1lXHBkusrTJ6StQ4BXynH9ZYUbhHUMrKyniCjAqR15HRA74nGZ11KoUEsQAOOSQAB+8Dtnkv71KNNqtVwiICWZjgASY1j8QbWkTToFrutyCjaDfJPlZcgftk+SY622autQqJcaowSkp3k0+mSaeehqrfqI6vIOTiCHVpdu+r3aX1ZGSytWJtab8Dcvn+Myno4DH/AO52OJ10aQVQqgAKAAqjCgAYAA6BO2BqXRO9+0XpGpfAZc7B967H0ej8AkLove7aL0jUvlmXWwXeux9Ho/AIEBtHRbRtTXUaKn8rdsUrovNRjxOB15BYf6h0zbNrcLURaiMGVwGVhyMpGQZ49c0mndW721VcpUGDw4qf0sOog4I8015+HGq1LO5qaLeN3VMsbd25rpjO4ueggFh52HQIG1onAM5gIiICIiAiJjtZ1SnbUKlxVbCUlLHrPUo62JwAPLAk/wATtqGtqK2tuSbq77mmq8WRCd0tjrPNHlyeiZPYDZhbC0WmeNWpuvWblzUxzc9IXJA/eSf4d6ZUvbqprV2vFmK2yHiqoARvDPKACVB6949U2qBA1btn/MWl+b+rSu205lp6bafEZI7Z/wAxaX5v6tK7bTmWnptp8RgUsRECd1fvjp/rfypRSd1fvjp/rfypRQE4xBMZgeDVNJoXKdjr0UqL1VFBx5jyjziSlX8MrVcm3q3Ft/kVnwP2bMuszmBDDYOrjH/GL3H+NPpPgfhnbN/1FxdXH92tWbdJ8y4/2l5OMwMdpWiW9sm5b0Epj+4vdHzseJ/czI4jMAwOYnBM5gYChsxbpTuqKq25fNUesC7ZZqg3Xwf05z0TJ6ZYpQo06FMEJSRUUE5IVRgcemeycEwOZr/8T9mGuKK3lvlbmzwyMvBnQHeK+UjnD9xNgTgwJjYPadb+zWrkCouFqqOG7UA5QOhW5R55UTT2uUW0XVFvqQP5S9Yiug5KbFt5sDoxkso86zbVvXV0V1YMrgMrDkZTxBEDviIgIicQBM1FtNctrGpLplFiLa1O/cVF5rsvA4I6iSoz07x6JSfibtQ1rQW2oZNzeZp0wvORSQpfyHLAL5T5J7tgdl1sLRaZ41andVWHS5/SPIoOPaYFJa2606a0kUKqKFVRyKoGAJ6IiBqzbP8AmLS/N/VpXbacy09NtPiMkds/5i0vzf1aV22nMtPTbT4jApYiIE7q/fHT/W/lSik7q/fHT/W/lSigdF0xCMRyhWI8hAMwOjaT2S2oVGubks9Ki7H8xUGWZATwB65nrz+G/wDgf4TPHs5/0dt/kW/y1gdDaIQMpdXKt0MapcD/AEPlT+4nOkXrlnt64HZaG4SyDCVqTg7tRVJJXJDKVJ4FTyjEy5MwVlVFS+rOnFKKJQLDmtW3i7qD07oKgkdLEcoMDLXV0tOm1R2CqnEkngB9ejHXMTT/ADNfut821M81Qoa6cdDNvjdpf4cMePEg8Iux2a9SgRlLZFuHBHcvUZ2WiD17pSo2OvcMzwEDDf8ABOUi6uQ3HuuykjP+BgV/bGJ0VLmvbcax7NRHOqom7Wojky6LwZOkuuN0cq4yZQz4KDHJA8GpUmq0v7GruP3Lo6nKkghlDAc5G4AjpBnGkaiK1PeKlHQlKlNudSqrzlPWOQg9KspHLPJoQ7FUr2n6aJp1KQ6EoVd/CDyKyOAOhd0T51ik1F/ztMMwC7txTUEmpRHEOqjiaiccY5VLDid2BnyZg6ly9e47FTYrTtmU1XU47JV5VoA9QGGfzqvSZzqepFlp0rdg1S6GUcYKU6OAWrnrUA8B0syjrI9+m2SUaa0kHcoOUnLOxyWdj0sxJJPSSYHrXkn1EQMXtBo9O7tqltVHc1VIzgbyN0OM9IOD+0gPw21d7WvU0W7OHoljQYng6Hut0Z6MHeXzkdE2lNffijsy1akl9bdzc2fdqw5z0xlio/vKe6GfKOmBsGcya2H2mTULRK44OvcVV4dzUABP7HlHnlLATHazqlO2oVLiswVKS7xJPEnkCjrYnAA6zMgZqXae5bV9STTKLH8tbNv3LryM6k5GR1cFHlLdUDu/D7TKl9d1Nbu15zFbZG5EUZAYZ6AOAPXvGbUAnns7VKdNadNQqU1VVUciqowAJ6YCIiBqzbP+YtL839WldtpzLT020+IyR2z/AJi0vzf1aV22nMtPTbT4jApYiIE7q/fHT/W/lSik7q/fHT/W/lSigdF5/Df/AAN/6Ml9C0J2tLc/n7tc0aBwrUN0ZRTgZpE4HJKi8/hv/gf4TPHs5/0dt/kW/wAtYGOuNmHdGRtSvcMCDu1KKtxHQy0gRPrSy1tUSyfd7Gyt2CoihN7d4tTdF4B8ZYMMBgG4AjjQkzAa0d+5s6S4LpWNduunRSlUQt5Ms6qOvebqMDstH3dRuUOc1KFq6nHAqrVlIz1g4/8AsJm5htatH3qdzRGalvvdxkDs9Fxh6e90HgrL/eRc8CZ69N1FKyb9Ns8cMp4PTfpV1PFWHSDA984M43pjdW1RKKgEF6j8Eopxq1W6lHUOUseCjJMDzW53tRrkf9u3tkJ6N5qlZgM9YAB/1Ce/Ur1aNNqj5wuMBRl3YnCoo6WJIAHlnn0WyalTY1GBqVmapVb9Icgdyuf0KoVR5FE8dgPzVUXTD+xplhbA5w5xutc48vFU/uksD3QwHg0O2azrZrKq/niuGXJS2qjeYWobop8WK8g3i/SwErwczy31ktWm1JxlWGDjgRxyCD0MCAQRyEAzwaPetvNa1j/a0Qp3jwFxRPBawHWcYYDkbPQRkM3E4BnMBODOYgae1ek2iaoLump/JXp3aqgZFNySSAByYJ3h5Cwm2qFVXVXVgyuFZWHIykZBHkIM8G0WjU7y2qW1Xm1BwOO6RhxVx5QcGa42J2oOnC403UH3TZB2pM3/AHKQyd1c8ueBUdIbHRApPxL2pa0oLRoZNzdHcpqoyyKeBfHX0DynyT2/h/ssun2gpkZq1MPVblzUxjdB8FRw9p6ZLbAaa99d1NbulOGJW2pniqqvc7w8i8QMdJYzagEDmIiAiIgas2z/AJi0vzf1aV22nMtPTbT4jJHbP+YtL839WldtpzLT020+IwKWIiBO6v3x0/1v5UopJbWXFSjc2dwltVrrTNwGWgu8679PdB82Z1duz+Kr33a/dAraqbylT+oEcOoiYW10StTppTXUKwVFRVHY7U4VVwBk0uPATGduz+Kr33a/dHbs/iq992v3QMudJr+Ma37U7UHHVnsXCevT9MSiDu5ZnIL1KjFqtQjkyx6B0AYA6AJO9uz+Kr33a/dHbs/iq992v3QLEiYu+0WlUbsndU6mMdlouyVCOjeK8HAyeDAjjMF27P4qvfdr90duz+Kr33a/dAyo0etyHUbgr4IW1Bxjk3hSDfvnM9Wn6TSolmRSXbG9UqMz1W45wXclsZJIXkGeAmA7dn8VXvu1+6O3Z/FV77tfugUep2QrUzSLMquRvBSAXTOWQnoVhwOOOCZ66aAAADAHAAcgA6AOqSPbs/iq992v3R27P4qvfdr90CxngvtPV3pVMlXotvKy43t08HQ54FGHKD1AjBAIne3Z/FV77tfujt2fxVe+7X7oFiJzI3t2fxVe+7X7o7dn8VXvu1+6BZRI3t2fxVe+7X7o7dn8VXvu1+6BYmTO0mxVpfVFqXCNvICoZGKkrnOGxy4PJ555O3Z/FV77tfujt2fxVe+7X7oFTZ2qUqa0qahUpqqqo4AKOAE9Mje3Z/FV77tfujt2fxVe+7X7oFlEje3Z/FV77tfujt2fxVe+7X7oFlEje3Z/FV77tfujt2fxVe+7X7oGV1HZmhWu6N44bsttjcKthBxJ4r08s6NtOZaem2fxmeHt2fxVe+7X7pj9T1ypdvbUl067p7t1bVGerTApqisckkHywNhRPneHXEB1T6iICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICcGIgIiIH//Z',
        name: 'Fitness Gym',
        location: 'Tunis',
        activities: [{ name: 'Squach', value: 'Squach' }, { name: 'Spinning', value: 'Spinning' }],
        access: [{ name: 'Men' }],
        openOnWeekends: [{ value: 'No' }]
      },
      {
        id:8,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZPhh3RueG429U7tXhnEuj_SiqXUOTXv-vA&usqp=CAU',
        name: 'Lady Gym',
        location: 'La Marsa',
        activities: [{ name: 'Squach', value: 'Squach' }, { name: 'Spinning', value: 'Spinning' }],
        access: [{ name: 'Women' }],
        openOnWeekends: [{ value: 'Yes' }]
      },
      {
        id:9,
        imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
        name: 'Panda Gym',
        location: 'El Mourouj',
        activities: [{ name: 'Squach', value: 'Squach' }, { name: 'Spinning', value: 'Spinning' }],
        access: [{ name: 'Mixt' }],
        openOnWeekends: [{ value: 'No' }]
      }

    ];
  }



  ngOnInit(): void {
  }

}
