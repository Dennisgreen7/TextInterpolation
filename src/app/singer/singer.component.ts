import { Component, OnInit } from '@angular/core';
import { Singer } from '../Interface/singer';
@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.css']
})
export class SingerComponent implements OnInit {
  egorKreed: Singer = {
    FirstName: 'Egor',
    LastName: 'Kreed',
    Age: 27,
    Photo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRgVFRIYGRgYGBkYGRgYGBgYGBgaGhgaHBgYGBgcIS4lHB4rIRoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQhISs0NDQ0NDQ0NDQ0NTQ0NDQ0NDQ0NDQ0NDQ0MTQxMTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAD8QAAIBAgQDBQcDAgQEBwAAAAECAAMRBBIhMQVBUQYiYXGBEzKRobHR8EJSwWLxFCNykjOCsuEHFTRDorPS/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAgEQEBAQEAAwADAAMAAAAAAAAAARECEiExQVFhAyIy/9oADAMBAAIRAxEAPwD4/PYiUE8nsQEREBERAREQESXhuHu+uWwPNtAfK+/pJtHhK/qZj/pUgejMLXma2SqeJfHhd/cRFHV2Ln5XAPpPW4Wq2BdCTuMoT4G0zW5VBEt8ZwxFOjFeuhdR43HeA8dZXVcMyjNoV/cpzL6nkfA2MrWWY0xPZ5DCIiAiIgIiICIiAiIgIiIHk9iICIiAiIgJtw2FeocqIWPO3LzOw9ZIweCDd52svTmR/Etl4llGSkuVB00zdSx6fXneTaqctOH7PN/7lQA/tTvH1bYSwTgCpY5gvQFWZm9bj5ATRT4wU0QXNrXI0/5V+/wm2njHY3d7X/qF/U628rSbaqSNlfhtRtRU23AGQL0sE09bmRWpW1ZQx/cXZr/HQ+suExSfuRdhdiB8GJPyAjFV8Oq3LKTz1bIfANY6xrcUYx5U29moHgcrfFRrPaddGNg7IT/Xa/x0PxmrE4umb5LAdArE/wC42MhFx5+YmsW2IZ10J13BKlG8NtDK58Yb66NtmygG3MN+5fA7+M8pYojQe7+06r6A7TzEJnOYDT6eF4jKi4lB7wFuq8tf1J/T4cvXSNLOmq5W0/SfwStlRNjyIiawiIgIiICIiAiIgIiICIiAiIgJtpKNztNUkkWFvD6/2ExsZZy3l0/kzaF0tsBv4zHJYAdfoNftNmU2A9T5n8HwkqgvqB8z59JuXElCMqrcdQDb47TOlhWawA2PznRcN7Ms5BYb9ZlsXObVLT4hiHP/ABDbpYW8gAMxm1OE1qveZM56lFU+HeB2nd0uz6Lb5yenCUGy8+dz9ZPkrx/b5u/AKo0KLcDbcfLeak4c+bKct/263Hqec+onh6WsVFj4CUbcKysdNu968jE6PGOQXgovextsbeZ0+R+E2Hh6rf8AaPDe/hOufBBTp4eWw+Vwf90hYjCchprceHP4XvK1mY47FYYob2+HOU+LSzabHX7ztMbgrjbW3L5zmOI4chb9D8ja9vlKjn1FZERaUh5E9iB5ERAREQEREBERAREQEREAJZ4Whnz33VA/+0j/APQlfSAzC/M2v9/CWz1BTuCNWUDyBUafX4TKqMmw+39La+AdRl/n5SZgcA1Q+MicOR6h01sLX5W6G87DhOGygXNzOfVx1551P4NwVEAL6npOgpgCRKA0kuhqZz3XXMSqVO83mjPKckIZsibUY05GxNEEX5j4y1ZJBrCL6J7Vj09NR8pXVUHTw/PjLaq0g4inzA8xHPR1yo69P9Wthp+fP4Sl4ngAylhruDOkqU73PqRp1P3kHE0GdLi/MW38pe4jx182qIVJU7g2mM7rHdnsPSUPiWfPUHdRLkiw1IA9NTpOT4pgPZEFSWR7lGIsdN1YcmH8yp1K59f4+uZtQYiJaCIiB5ERAREQEREBERAREQPZuQs5118ZpmzDvY/nWB2/CKIVBbnv4y2w5sZScKxWZF8tZd0Beefp6+fi5oPcSwwxlVhjLPDHnIiqs1kqkkgZ7zF+KpQHfbXoN5cRYtGlfiTKuv2uDHLTp3PK+vyE00+Is5JdrE/pFtJtOZUxlvNLJJFFs203PT0nPF65jHplbwI/LSz4WqZCW5aie4/DZhIWFUsMgNidPtKt2M5mVZYfCLUV6rEl3JsMosqLsAb+Z9Zz3aHhYqYd+6NVZvKpTBYN4XXMD4S4wvZ96YNRKjFvedGbTXUsn2mPGXy4ao23+XUYjoyoy/POvwibsXbPGvi0RE9LwEREBERATyexA8iexA8iIgJ7EQE8ET2B0XBsR3bTrMBW+InzvA1crDznaYIupU7rsTe2W/O/hOXUd+OvTrRT7uYDYXNunMzXQ4ki3BNhf4HcSvo8aRCBm0B1blrNHFuHDEENQYXtawOhHQznn7ddSuLdqlp92lYm3vbgacpybcReqx1sObMSbS7w/YqubF7C+tr3mzinZ16AAUL8dtNz18pWxmagYfjWHwgIKl2O4IAJ9Nbetpd8Oq16+UpQRFcaZhZvheV+G4arlLUQSv6iDr4m+h9es7fg+EZO85JbxN7cpt8T3PqwwHC8qgsO9z1uJ5iadpZ0L2lbizqZPXxPO6rKqykdvZ1B9fXSXtWUnEG105W1kx0rp8DxFe8x1Yqqqo5nXWcX2uxRXC1gNBbJr+p3cZreAVbesveC4hwrZd8u3O/QeM4/t3VapSFNQMtO1R8rZgxI3vbza3K9uV5XPuxPXrmvncRE9DyEREBERAREQPInsQPJ7PJ7AREQEREDKmbESyxPE2awB7o2H38ZVzKnvMsbLibWxrvYXsPE2/t5yw7LcTeliE7xKswVtbjXYzdw5KBpBXAZ7kkjQAHdTfebuLU8gRgoXK6kACwABH2kXPjpzOvr7Mj3VZpxWFFSxI1GxnnDXzUlPUA/KS0qAHWcnfEFMEV5CTKFOZ4jErynuGqAzWe8S72EqsUdZZ1TpKzECKcoNSUWK3J6mw+P3MuMW2h8pWVl8NyD8tf4+IkRavPEHpB/ZrdspKAnc8heeYbAsKXf1d+8/meX8TVjEs9/Qm9/K3yltRfOinwlVMfK+N8MOHci3cYnKen9J/NpWT6vxHhyVlKOLg/LoR0InzviHCGoVMjf8rcmHXz6ideetefvjPc+KsTcmHY/p+On1k1KFtjNypL1OIS4BubAfEzw4QDdvlaWGW1/KQqi+MFmNTUkH7viPtGIw+VVcHRr6HcfebKVAsZhjaudhb3VGVfIbn1PytNYjREQwiIgIiICIiAiIgXXAqBzB5d8cTMEU82W/wAZzHDMcaTeBl5xXGh6YYHXcek59T27c2eOPq/AqgKKpNgABfyEicc7S4bCDvuSxPdVQST1Np864V2yZFAcXtofGdFwviuFxBL/AOHLszAM7p3UsNEDHyOg8ZGZ9debL8ro+Dcap4wdwmxvuCNpZpTemeokXBY+grHKiobW0FhlXYC3pMcX2lRdlBGnjoba/OTirv4XaVgRI9YSqw3G0qPYjKdxrofKTa2LW9ri9ufPSLSRBxZtcgXI0t9f7SprOxA2A0Pytodjpf4S6FBnbu7bm4J0PUfL0EqO0uFeigfQqTbpY/1A38flMnN+lqhxLk5tt9OtpdcK7yepnN13DnKv9/Lw2+E63glCyWm9fDn6NTkDjPCFrpYjUaqehl3UpzFUk7jbNj5NXotTYowsVNiJpInd9peC+176Czj/AOQ6GcO6FWKkEEbgjUTvz1Oo83XPjRlJHjNS05JWkTvNiJK1OIWJf2aED3n0HlzMraosbeEl1Kmdy36V0HkOcj4r3tuQmxNaYiJrCIiAiIgIiICIiAm9Kxy5SdJon0TsfSw2Jw4pkAOujA8z+71k9XI6f4+fK5rg0oEkAczO+7P0/aUGpIQCAHW+lyp/naR+0PZg4VfaUwSmzAC+UH9QnLDGPeysRfmDa3rIv+zr4+NfTaVegiL7apZra2G1wB9/jI2IrUsRdMOjGw1du6qDQX8TfkOspOFcNeogZ6gb+kE3PMXY7+QnXYbh+REB2B2A0F/LyHwEizHeST3ThvZtTYCq7C3eL2Nzzy6aes6ZOFoovz6neRMHiBTAzDYa9PP86zmO1XbjKTSw4zvtpy84kjn1et9fHTY3jFPDAtnCsBbW3rOE4r2t/wATmCXKLux5k8gBynK4jC4it36rmx11Ok8CCkMq89+nrKTb/FxwRDUqX5D6z6LgKWVBOS7MYIouZt21PrOzww0E59XauTIydJpKSZaaMVVSkjO7BUUXJPL7nw5ya2KvjmIShSNRztoBzZj7qjxP0BPKfNKlQuS7WzNqbSZx3iz4yrmN1Rb+zT9o/c1v1G2vTbxMM7TvxzkcO+trwNNOLay5bgF9L9B+o/x6zaBbU8tT00leo9sxYkgbKAOXL88ZTmyXCZRyI6ia8XRut+a/TmJPw9ADa/mTp8BMKq62myssUUSw/wDLh1MSkq+IiAiIgIiICIiAknh+Neg4dDqNx1HMGRoitlsux9p4Dxha6LfVWGt+WmoM4ztfwlaNXOi2RzsNg2+nnMextR1UEG6nS3SxO07aqqV3RGAJWzm/I65fXQn4Tz/K9svlzKreyPCaiIGqk3OoT9o5X8fpOvcADUbTPD0bDQfSa8VgXrAoHKA6ErYvbmFOy+evlCa4/i+OqYqp/hsKuZ/1sPdQdWO1+kueBdiqeHAZznc7nle9/Mzp+DcHpYZMlNAq3uebMebMx1Y+JkjG4tKSliQAOZlYjy9+nM8Z4BSqJ7gQ9UAB9dLE+E+dY3s7UpVlD95Cbq4/6SOR+vyHUca7X+0cpRVnYbhFZreYUG0hDjoqKUdSGGhBFip8QdjMX9+rjh4AAlzh3nPYOtcSzTEKilmYKALkk2AA3JM5OlWz11RS7sFVQSSToANyZ8u7SdoHxlSy3FFD3E2zf1v4nkOQ9Zn2k7Rtij7OncUgb9C5GzN0HQep12pUS07ccZ7rz99b6jYomVpjea8RXyLm35KOpluTVjHzEUwehc9ByHr9puWwsANPn52nmAwuhdtWbU+slvTAjTK1pTB2J/PCGw46X89frMBTINwbG/pNq1zsRY/m0FjX7Ff2D4H7RJHtB+CIY5OIiWkiIgIiICIiAiIgfR+wOFDUMx5s3yYzZwniQfEVWU93OMv+kKFB9bE+spOEcV9ngiimzXZPEZjv8CZhwp8ucg22F/TecrPr0c9ZI+m4DiIqPkvtOipWG0+YcFxDCop66Hz0n0LBVr2HOc/ldL7jfjsSyKSqMx5BRuZyfE+D4vEJnrKSuYEYem9mYX0V3Ft/6Tp4zuVTqftGIrKikkiwGvlzlX39c9z4rOFYClTpL7OklIWBZFy91rAkMV9467+M4n/xApJmR0FnvZ7fqWxK362I+ZmOE4w1L2q4b/NFSqSO8uhzEaC92Juo01OXaVHEv8TWotiGp3p6d9HD27wuWA7y7a3AmS6rM+tvD8WAmZmsANTKXjHFXxByglaYOi/ut+pv4HKQ2qswy37o2HU9TMFEvnmS6nru2ZGSpaZeZgtNJudLfnSU5Pc/T8A5zXRT2jZyO6PcHXq0yamWbJ6vbkOSiTQALAC1haBkjn86TOYM1plr0g9sA5+c9ZOvoOn2mKseQPibflpkxMHtjY/uMTHvdYgc1ERLQREQEREBERAREQJOGqW/3A/OXXD3Njpox38rbSiwyFiQP2k/Cxlvw8HICBcsSovy6mT0vmrilXamyENfkpBurW09CNvhOww3EiroQfP+fUTjqLDMqXSy95iTppqACdtZNzGo1wf1X7pvrblbc2tpzFumsWa6c9Y+uYfECogOa+khcR4YMTYNUdQCDZCAD53GvrOT4NxJqZClgetr2/vOoXiKk5ryL+q6SZ7jje0XDGwjq6d7INwjOXps2V0dVcAi7lCQAf8AO3AC5caHElw7vnIZKodKikFX9oC2ZnpOyuuYKrHuMbuQSNL6u3vadGX2ShSxuCSAcqnex3VtrEdOl584r8QYtcC2p0BYgX5DMS22lySfEyueXPrrFtpc22vpPGXwmnC4lXAtuNx+biSsxv4y0Roe4F7f3mrPbbUk2A6m2reQm+u97DrzPLqRPcMl+94WXwUffeBlQQILczueZPUzcusyRQBf8M2pZBqQL66/SG40JR5na+nWTAABNSVlPO5hyT1A8N/jAzOmm2mg6zwqba7z1XW+k2OoktRLeA+ETbp1+UTdY46IidHIiIgIiICIiAiJkiFiFUEkkAAbkk2AA63gTOFU8zN4IfTUS4wFJlXlqpseh1t9flN/BOGGmhLWLOwUDkMtjv5m/pNxqUlYhamxN1KHfYgE8r+U53rfjrOc+ssFVSgly4zG1gLZifTYctZKw1Tul37tznbrsANOp6eUxd07op0iari+qAZRcjMxt4XtfzkdQa1QqCcibnYk7E+Z+QmmrvC1hUS7A3BNrdNOfUbX52m2vxMU0OdsgAJ13PpzmzAqoGosBoMvK2k5ftljwVyC+p5/MiT47VeWRymNxTVXZ2JJJ58hyE1u7Pub2FhtsNhMFF5ZYTD33E6fHH6rlJU3GhHOWOHx9xZtCdzyP2MkV8Ip20mAwiWtl+8xUljZWN7KurMNT0XkPWS8MpCi51mGGwyoLAeMkE8pjXtTEIvifDr5yO1NnNzYfxN5QCwHX+JrqG2kfCtmGC3yr6n7Ta6kC/XaRcKpsT1M31nJIXpMpDDU9d9tZLPe8pFQFdv7zdmY+AmNbsg6RIvtPE/AxNwchEROjkREQEREBERAS37MUA+JpBjYFrHa5uCoVb7sSQPDflKlVlk1A0lpvfKb5w1r2Yar8wJPV9K5jr1qBX9mUuA5FxyN7G3w+Un4mhRpuTsWNycmYXO5NtQfy09oYRFw9KrRJ9m6KLtbNnC95Ta2uh1trYy94Jw5KyZ2IvruAdvpOMdrfStGFIRmRWIsTdCGANtOjb/0ygw1qNFLG4K52t1YX19LD0nQUuJrTCM1J0DjuvfMhuuYa2G4E5jj3F1AYBFW/Qk8ydAdtSTbxl/xP9Rsd2ldAQg9Sbzl8TiHrNmc3M1VHzGSsHS52l5iLdZYbCk8pZ6KLKJijWsJuDAzCNLNqBFPUkzAm7GbL25QFZzcAG0kI41vpIym1yR3jy6f94JJO2k3GayrOWNlv5zJzee5+QntJLt5TGpKDKLdJiHAvrrNGKqW+nrItNdb9YashUmzNy59JFoqSdPU/nP885IFv5PM+cBkb+n4n7T2Y5T0nsDkIiJbmREQEREBERA20ftLzjH/AAE81/mIkdL5+Vb9nvcwn+rHf/RTnY8O/wDS1PX6xE5fl1/Ec/xH3MD/AKB/0Ccj2o98T2J0n1F/5qiSXGA90eX8REqojJ/em9OURMa0pufzmZsbYfnWIgYDc+ckP9vpPYmsjWu5knBfq/OURMUg4r3h6zBNxEQxaYD3B5t9ZsERBGyIiGv/2Q==',
    Songs: ['Lost Control', 'My Life']
  }
  songs: string[] = [];
  constructor() {
    this.songs = this.egorKreed.Songs;
  }

  ngOnInit(): void {
  }
  
  isShown: boolean = false;
  toggleShow() {

    this.isShown = !this.isShown;

  }
}