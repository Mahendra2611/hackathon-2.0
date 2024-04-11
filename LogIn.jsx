import { useState } from 'react'



// import Card from './component/card'

function LogIn() {
  const [count, setCount] = useState("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0AW4DASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAwQBAgUABgf/xABBEAACAgEDAQYEAwYEBAUFAAABAgMRAAQSITEFEyJBUWEycYGRFEKhBhUjUrHBM2LR8CRyguEWQ2Oi8TRTVJKy/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EADARAAIBAwMCBAUEAgMAAAAAAAABAgMRIQQSMRNBFCIyUQVhkaGxI0Jx4VKBwdHw/9oADAMBAAIRAxEAPwDyDxMvwglavlSCPocGAx6bf+rpmm0+ofaHl3gGwZwHI9twpshdOjOHT8OxHOzew3ffIqp7oLjd4ZmsrAfCvPpf98qY24pGH3z10Wk0MqI3dxI1U6l1ZS39Qco+m0Jbu5mEdkBGARlHsWXj9MRatcWKPRvm55Pu29D9s4Rt6HPQz9mBXZUO8X4DCCxYdbAwX7r1YAP4fUAeW9NoP1OXWoi0c8tNJPgxhE3ocYihb0zQ/DyK1MjCuKcV/UYzHotSxXZGSSTQUq118jjOsifRZnCFvMZ3cn0OegXs/WCP+JoJipBIaJW3Kfk2Pp2J2YsUH4rWahJZUWS4tOCsYbykDm79ayT1UI8lFpZS4PIdz7ZHc560dg6UK8zazvIRu2CKMxyvtWzZe1FfriM3ZbgxnSmbVRybqaPTyAqw8mC7v640dVCTtcSWmqQV2jBEOE7ggXtPS+meki7C1caxPqnh00spPdQalCxYdB3pBpb8hzmynY2rERAj0Q8JupLiZh+UAoGxJ6yEeMjw0kpK7weB7rO7q/IZ7CXs/VQxyNqOyQqgMGZUjccr8XgPl1BzE1AhZjsiC+V7garjyykNQp8E56fZ3Mvu8ju8dMVfy/IG8qVFVQy28lsEjH7ZGz2GO7Ble7GbebYKbflkbLxkpWRt9sO4G0WMeR3ZxrblduHcbaLd3l1hY9CvysYbZnbR6Zt1wpWLLo2YDc13/LRr55STSonV2Hraf3GTyOhI+v8ApnbpKosxHubxLv3H8tuBd4FAsMGHquAMQxzb/sZXux6Y6kxLCnd5Hdn2xox+2Rs9sO41hUplCmN7RzlSg9MO4FhUplCmNFPbKFL8s241hUrkFcZKZUph3G2ixW8gphymVK4VI1gG3K7cY2+2V2j0w3MAK5G3D7fbI25txgFZG28NtyNubcA99P2X2PrHLaDVpGRQKFCYvkDw39cGP2dlJkWxxyj70IY1fFUa+YzdbsvRu5bumR/N0JUD6Dj9Muken0tCjI3JJeSQA37MSM+T8TJK0WfVeFi3eS+h5xOwe1AaCKw/N3Mykj3PnhkTtDQyKjaeRxYrfFvu+gU3nod+mlUSusgaI2iRykbz5fDzWDftVVsGM8EeF1/obvD4icnlXB4aMeHYUjfVOUeTsWNUHRlilVh5E0pv9M09Nykpijnck2yu5koDyWNwGwP74g4YLRuq6Gvnh17R08popGL6kluV+Yog5GTb7WLJW73KNo49S7EQalRQ3Gtq36AObyydl6KAs8+okjXcNplKIPLw2gs/O8MNPHMCYNVNE/BHeTvLGEHXiw365l9qa2UokXdyNpw1l3dnZmIrg8CvTGg5SdkyM0llo9CjaTYiQa1OB4QrLLYHFlfiwksXexuZE0kwWI3Kp2sq1yRYI4+eeFinZJFcM6D+ZbBWvQjNCPXxfhpIXQOPEE3MVKM35gRzjui1wyW+/I92hrYptI8azI7xuLVFrvFIFMTxyKxHsvtDUrqVjSRk77wFVPhLeVAcX6Zn2GY1Yvi8kIImDbuQbFdQRyM6VBbdrJOcm7o3tQ2qllEc0z7o2YqG8mPJ4yjSdosn/wBRqGXzG4kEjzAwEev8cTTjceS7E27exJyjvLPI7Qu9byyJuraSK8Ne3GTjHNmUlJJXRpaI9qx7XcSvpWk7qTfbMo+K9p5ry6Yn2xojqHEun0E0caIwJigrvHuyzAc19MosnaOnN3OpZDXebyKNc849H2wi7VKSbR1IcEsa9D0xkpQlujki3CpHbLB5MwsWCAEsSFA8ySelZEmnmiZllUo6kWj8MPpnqZdd2c7Cc6cidX3KaDc0fFfGYvaM51cwl2stKFom6F3nbTrTlLMbHLOjCMfVcy9uNQyaIJsn0wYn86EhgPnlQpdgpIFmrr/TNOLsdZFDHUMLHnFQPyN49SrFLzCUqUpPyoxZEj3Huy22+N1A19MEUzc1HZsEIoSkt57ttH7ZmPFRqwefLHhVUlgWpRlB5QrsGdsvGO7zu7rH3k9guY2HxAi+nvlCmN7W9fvldvtm3G2C2zI2nGdgrgfPJEJYDaQSfKiDm3m2CuzO2YyY3BNgj6ZGw4d4NlhbZkFBjW31UH6f3yCgPlWbebaJ9314ypj9sc7vKlOuHeDaJd2cgx8WeMe7vPQ9ldnQppPxcsEYnkY9204J/h3VKjLQv1rEq11SjuZWjp5VZbUeRTTyTHbFG8rXVRKz8+h2g5MOh1WpmMMMYLqHZ9x2rGqcFnY8Cs9bLrG0yTh+7osTGqeElgab4KFemJw67QRPqHj043apEGoJY3a80vtnN4yTV0js8FFNJyPMTaSeEvvQlUIDOgLR8gkU44xYpm7q3ldtRJECsDVuVDcdHoOeMzWidgZKFFqIWuCenhGdVKs5K7OWtRUH5RIr7ZQpj34aYp3gRto68G7uunXBPE6mmVlPowI/rllUT7kOm1yhXacjbhyuRtxtwm0BWRtHphtuRt9s24G0+rpJFztexY/NfP15/TJbZICrAE+lKbHsc86O1JyWUu5JIIJKs3H+YjGD2nIEFuOnkqj7i8+Q6ckz7HqRH3gFEwPHG5sbHBCsPQk5n6mKeJd0iAgnkobofPrnL2mzbFeto804N+tGxhhrEcbW2Mv5g6gWPplFvjyI9sjPV9OfJvesOrxAcOygnzF5Jg0cjblYxc8otsD7g4wul0YFDUc1YtLF+hrKOaJbGM6MKqNq5JAIICSwsGVj0ACfM+uZmu18mpvfuJEjMnSgp8qAAxvWfwNMITJuaQh1YcBU/kr585lLG7kKquzHmlVia9aHljU0m9zJ1L+lAhqCF6fSsJG6P1FA4UQxc7lIIy34dFoqdykWCvl7HOlSRzuLQaHTqSGDoF5sk9K5y8J00ktO2xP53Unp7LzgkAWyrsoIIr1sVWV7pwwdGujfNcHE5De3BpHRb1crTKNjBhwdp/ynnGNLoo+d70fMHivTM6GVwCrOWax/8HNHTSyKwaRlQLzb9KPsOclJSS5KRcX2N/ThNPAkTSkqtlWaxSkkgDLNFppfiXTt6740YkexoZlQ6/s+F5H3uxIIWrC0fKicaj7Q0+oYKkYJI4J6g/POfI21NlpNJ2YQV7qIDzCnafc1mPq+zuzKLQSOCDRQNu/Ui823SAlhM3J6V1uvhFc5CR6Im4okJAAPHTz5vjKQquPcEqaeGjyz6CJSu2Rua5Yrx78YzHpNa3EerRk4AJYg38uc25INK4dZIyK5Yc0PPyxZBpIjUQLEsAvejd6UEo1lXXckIqNmJHsWSUXLqWP0FXlX7AFArMQf8wsZuK5IJYUqiyV2178jBtqF3gbWCkWG2tVe56Yir1Fwx/D03yjDj7GkR7cxuPTnp7YV+x4D0XnoPKz75rd4C1IwboASeOfQZDb1YWKseQPHzLYHqJvljxoU0rWMGTsVOdktHyB5FfPADsmTcVMij/fr0z0RjcqG5288jixg9iDdZaqHkP0x1qZ+4r01N9jDXsl9pPhJF9SV+xGBbSNpzuqVWHSiD9PLPRBUHA3UeabKOImC2oauljj6XjLUyvkz0sLYPNyNMV2yBa5K+FVP3XA7etA/TPQT6aKQCivB/KniH1wf7tUizIFA5LUp+lZ0R1MUsnLPSzvjJg7BXTI2ZtN2YvlODX/pkf3yn7vUGu8U30BtST7VlPERJeGmuUZHdr6ZHdrwKJJNAAEkn0AGb8XY0jHdPIkUYFkKd8nyqtt41HB2fpHDwRu01FVeRt20eq+QyctXFYWR4aOcnnBk6XsZ3eN9Y6wQ+F3jsmVk8wa4H3vHdUySRwxwxFDGoRdpYihwKvHJpXpvArSGh0BSr/NeJarT6uUb2eJFpeFWvh6cDOKVWVR3kejChGkrRRgavchs/EbNN9uQOcy9kx3laHoOSW9hmxqIdXOxUMW29CFUE/OucWMDRkpufcCAQavd7Z2U5YwclVbcsROn1cjIjfwo2VWYFiFHuR641FpdPo1LNOXb0Xjr58E5abTzKd0qtZJXcxuyPIHAMvtlfV3Iue3sMHWRM20Kdg4BPFkeeL6jUI5A23R/PyOMGU9soY7s308vXGjCMciSqykrC0igsTxyb8PT6YIpjfdnD6bQTapgFBWPcQ0tWormvnlnVjFXbIKlKbskZmzr7ZGz2zcn02hg8Cwl3Bou7ub9wOmCWPs1FHgLOTbGUlgPZQKya1KebFno5J2bRrLCGBIRLHmev65BgBqwB8hkvNHpwUjg3qed7qd1n39sPpdXCaaVRZ4odT79OM8bdJZPa2rgB+EBqg32/pll0rWFBYEnnehqvfDPO7MdsfAUkWF49Mc77UQwQSOqsJmVUUsFEXrvdT1PFDA6kgqEWUi0KB1R2MjOpPgbYItovnmzfTHI9OjvsdULKbVUNNQ68p1GVRpkaTf3SK3MZaNZGYj/AO4wF7R5c+eW/EoInZ0iIIa9oK7hfnzdenGScpNlNqQtq9GdTMe9nWJR8KsNtJ7DOmlg0WlUaYbgwIeTcTICfylhXHnltRrmlTYoWZCBx+Za5+IjEoUi1ChnljWHcbYSK8ddK3A5aF2s9iMtqeAOnT8SSE5oWUJ5Oa50kIi4ARyo2qWqyOvFYPSQaaFpGWfalEhzt2hRzyelYdYg6GZAs6SMRG0LhhQ6kbDWGU238hYwSVnyZLIi2VF0emTsnkXds2KB4WFAE36f0zQZtFCNlxRs3H/EOoPPnTHOl0MREDSatV7zZ3agqS4PQrzlVN90RcF2Zj75lkPh56cc3he81XTu3s5t6XRaaPx3uVSSTKKB5quaxxG0iuoIQFaJ7uH4j1oHridfskFUfdnnY9NqWCu7Iqk9Gam+2bOm00cYDCRu923tUN9KJ4yZZ9JK7tGFmXc3wQMdpxebVrIqju5WYDbyrgivIbeMDnKWGNGMY5RosdNvCvMTK1ULAUE+RJ4xSWaVZu6jdzyBQ4Nnjy4xaIyX3jaZqAP+Kao+RAbnDq0s9fw3WrBkVSQK/wCXFSsG90OvqhAwRgHVEPxUDvHFk5bSN3zGWVVDDkSAKpoigCBx+mZ7GeSWIvBujXhQ9i1u7asegM692FgWCNzakrtJP+a/05wPCwa1+RmUtEFWKNSpJDcdST1A6ZMpKqpVgiqLkDDj6nASamOMyruZmO5zxutvYgdMz5JtfPGEETd0TW5rpq98CTY3A8+r03cyNHJ/EbcIwtEgjzIrFH7SVRGF2gg2w/mb1PtgY4NTKxDIgpQASLIH0wjacJHvM2nihBIZ5EiUX7s5641lewLvk7U9o7hEU+Q3cgcAH2wC6+ASQwPKiyT2Y9xNuV67cR1HbHZcCPGok1bgVH4O7h3H1Jpq+QzzGo1P4mZ55CFdqAEYpUUCgqjyA/31zvoaKVT1KyPP1GujS9Duz6CxjBH8bexAKKgstfy4/XIMTStbBhQNBiK/TjPIdj9qvpJliMwTTS2JNyg7TtoMrHkehz1setk2IETvFYAxtxR3dKOc9fTzoSsdWn1UK8b8WL93IBxGT9QcoYNXtMpVY06r3hO4/TIaXWku7Ky8hTTEX7DismRtTKiB1lVTQK7toIHqc502joee4F4NSyoxa2b8gHQeRvDwRQwKsk0VSCzvcFgP+UDi8K0iRxKwCxnhWZ3CLx5AvxeWYzSU3eEgjbSqGXnyuqzOcmjKCT5BLqjOdqgbFIuztPz5ztQ8xG2FAqgUSwDVfpWQY5A10ACNqgg3x6GsgkncoCFz5FiW+3/bE5eC3HIvFIqlBKJGG7llHhJztVPvJVAwUcAsKv5ZJRWBTcp7s06q/wABI/OB0+uc0NhRuNL8I4r7ZsJ5BliKK0ZlB6uhG5gPPyF4AxLGhLhSfykAbvWwTmm8SkG0B+ZxOWAm/KugJy0ZojODsZuoLzFTRVFFIvNfP54mUzQkRlNXfyN4Exsein6DOyM0kcM4OTyJFMrszQbSTghSgDEBqLCwD0JGFXs9j4nfwA9UUkn5XmdaK5MtPN9hPSqtkMhaMUWPp88eVyjKsaqkR3UKXZZ+XnlZE0sKMsILs/hO4kgD1+eDjgk2Ot+E2xs/09M5ZzUsnfSpuCsVeJXE0rSFlTi1HVj6bueMQMSMTtO/1urX2NY+URBIveSBNgZlWtpN4lJ2p2dpG7mOiFHJQK3PnuJ5vGpuUsQVwVNkcydjLbtvW9ANOhJ42bief+ckZP741tbbNkgn4QR8iBeI/hZOtAD3H+udsdaAG6j5/wCp5z6JaWmuIo+Tetqyzuf1NWHX6lizGQIUAapHLBz6KoH9xhou2hG0hnj7yPbtVQpG5vM+MkUMxCmocglaroBwPnnCGY/l/W8WekpS5Q8dbVhlSN5v2l1shiDLUUYpYgSATVDk4P8Afs5POnQAgXTtfvyczRBN4R3ZF9Lwogm4tL+2ZaGjxtFfxKt/kOy9ramWOaJAkccq7WK7mk2nqNx458+MzQ208X1sgXR+mNdzOAP4eXh7P7R1EkEcUSgzSdzG8rKkRloHYXPG6uay8aEKa8qsc8tRUrSy7i4knkq7A8lHAxnT6jWQ7limmjR/jWNmVW8uQMtLotdppZYJlXvYnaNwjK6hlNGmXj5ZKwaq+FOU6aa4IutKL5IJJ63z/vzyA8qm1LcUV9q9MJ+G1Q/KfqMhoNQpFizXQDD013E6zvdDa9s9qnaW1MzFRtBJBoe4IrDDVa2dSW1UzAm2/isPuAcyDHqwSVi+pv8AtnX2g27coPlXPT3rJdCC4RXxU5cyNJNc2ibvIJyJDQYREHeL6OPhIzQ/8U6reHOm0z+GgHVkUH18D5gRw6uRtojiU0WuThQBzxh20erSMOJNK7Fq2Rhi4H83KjEqaalN+eNx4aqrBeSRqP8AtH2vPK7h2jDUFj0+xVUDyFqT+uOw/tJOqSJqUi3pH/DMS1LIxNAn/wAsV58Z55I9WASyoAASaQA/UnBk6qg5QXdKQvUAe+RnpKMsbUXpa6rF7tw9P2x227q/f7QOQsUUaRk+dqBRvzy2l7d1kUs8r6jURyS/4hjbwkjgHa1jjy4zPGp7QJ27YzRAAKAf9slm1X54orvkqoBI9xlI0KaVnFCS1M277maMnaKTMZW1OpeQ1Tl23fe8iPXzaf8AwJZAL+EtxfyPGZuyfdaJ5g8BePocMpLUsveK10TQ2j3GM6ULWsIq873vkfbtXtGxWo1C1/IwSr/5QMz9br9TP4Xmll2GolkYuAT1b0vLSvqU8EUgdSOrKOPleDKyo8UkxBIUEItBiCPOul/fBGlBO6SHdecsOTEW78nxk23Sybof2ygZAsgKFnJ5JBIr2rNEBJG5j8gN240PYDrWBdG3mlIHkQbFe+Vv7iIUjV2sndS0xCqSdvnROaqy6cxJCGnDKxZGkYiIqfyohJAP1wKIFVnkLAVwg+OQXXF8fXEnkkVyO6pOigndVe+Cyk8hcnFGuzzvGnMsgU+EGRvD8gTlln1cVmKWaMuCHYSON3+UlTikOpBQB1JrgMp4+RGFeYOF/hswUdLpfsMDpJ4aN12uGGbWaiYDvpi4UWFkZpAgHmA95RNa+1kj7xYVO8+IheOfhH+uUBMq13YRaFIDtDevOIajWJRigjpSSC1kb/f5YqpR4sMq8nm40/a+vkV0hllgjYEOm9j3p8yxbofliYnmWmEm1geKjAI9wy85RdTPGaaOh1p1Bv75eTUO3i7mIKfNLr9cZUorFkHrz9y8Or10cnfQyyCayzOeS3mSb6353eeh0X7RQyUmsRYJRQLhSYWPrQBYfrnmfxEiV4UPH5R/UHIfVNdqimwDW0ja3ocjW0tOriSL0NXUou8We7bW6MR97+M0ZisLu71Qu49BycUn1ulj/wATU6WMnyM67qPnV54ZppashP8A9ReBMkhBpV+wzjj8Liv3HdL4rN/tPcd/AQpTVafa54Imi8R9vFeGRJbVt25QVageGF/zdM+eNI4olB86GG0/aWu0nOmmkjHmqtac8co1r+mafw1teSQ1L4ilK84/Q+gPIBI3Q7mvgcknjjM3XdrwaYtChaWdVACr/ho3+dgfuBnnh+0XaGxkdI9xte+jGyRR50Phv6Yl+M019WF+bKeCfriUPhjT/WK6j4p5bUeTVTtnUiQNqI0lSySsf8FrPQAjj9M6bt3VyBlhWKNCTtUgswHzJr9MyzIjjwMreoU9MEx9v1z0PB0b32nmeOrpW3B5NRrn4fUS9b+I/wBsUKc9LvJLn/Zzi4ocjOmMFH0nNOcp+pl/33IUQNptz34zu8AN/lWr6e+GTtjRsB3kcsbc2AquPlYI/pmRGwVR/BVuRwSSevJ5w38IhdyKGq2VT0+dZN1JLsO6FPsbsXaXZsYjYzkl28W2EuUTb57hwb9MrJ2zolCnfOSxUKTFGABYsAJ6f765gMYTQAdeOlDax+pvLiGJgLIB8rZrGbe+WDoRSNlu249xuIGmUAyTBbSzZ2qpI9sCP2h1Csd0EDAM1FS4BXyHPOZY0iEnx+fqecKmkiFWL+pyiq27iOjD2NE/tHrDXdwwIA18guSPMePj9MJJ+0OvaNPw4TTvY3uhB4AIIph53+nvmZLpolSRwrWoJABsWMTSRVVgVG41yRdffGUlMCpxWUjcPbnapVh30IJdSZESPcAFogWD16nIh7X7Wjq9U7DduO9I2Y838TKcyBNIQOnHkFHP2y4l46c9T5fbKJMRwj7G9/4i7S2qCmlBA5fuyWc0RZG6vsMRPavahCL+Lm8HIJ22xJ/Oa5+uJK6GrNH3yTz88KQu2K7Gtpe3dSjBdWBNETyyoqyrx1BWlPyr656DRavR6xC8JB28OjDa6HpyL/vniArX5YxpdTqNJMk0LU68G/hdfNWHocNiM6aeUe8A4B2qATW5qCj6njBO6lhsAdY6LOlhb8hZxPs3tDsztIouq1H4eVAagl3d1MzdBE4Ir3Fj584xJERIzQxSrDGwsksEJJNEXwL8hZznbu7E9rishZDG0kQaMp3ih28VIy+q3nTCBYhtpxdAbgdnHHPXAzI8m1wzsSFHiJPAFdTgVG1iGBphRs8Vg2m3kiOJhYNNuqiSD9zxlxBL4SyHaepq6A8665QR7wNjEndRs8ZaTUSMhWqkTwbxxuQdQczfsFPGS+2Om2upK8fAec4DTvsDMqMWok2VoeZxVJHU8C/X55cRayY2sEhuySUIUDzNkVWB4GTb4Gfw+jJIE6syg8BCovyok4q8CKxG9Tyb9F+ZwKzQhlV958QB7sqT15onNvTx9n2ssSK8IRu+fUMW20asjbtHpV/fI1KvTzydFOl1OMCEWjaUEQlONxLMeKXrQAJydLp9QCzuh7s2AJQVVyPNyeQPpj0ur0HwRaiPToadyEYkv6dDwPbM7WdoyBWRdjWG3ySw2GXpSgMQL+f2zmjVqVHhWOp04Q7lNYIVBBcFn8ThI9qmvhAvxUPTMsqh3HoD69McnJmaORikcSRADqGPmBTc85m6nvL+Kgpur4APQE+udtLCSOap5ncajRQQOD6V1GaEIhbqU6EkEgUB88w4ZyrBSwroT1B88dBVhu7yMg+W7xKR/lyrZFRHNU8LgRx33dCy3xMR0+mZphiJNmifh44PzwrMz2VBIAUyE3x5AjO7ollG8cgUPzfYc4qfcexaL8GioHLnk7wVV1vgihwR87xgSdmnwsGVHb4Cu0E/PkX9cTeIxu6OGG0039yL88Iu+N9sDo6GrJXij5n/AF9snKKeSkZNAJFgEjgLtjU2PEGNHoLHGWaJXhMkce1UAaXa522OOFJ8s7UpJ3rFgdoYLuJRt1D+aMAfph4/wLxpC/f7Efcb2ojSN5Fl5rDKVkmNFXbRkyBbsHjywdcChde3HOaM40Cs6Km+QNVwtuQUOpY9cRUbb/iBb/mSxX0OUjK6A1ZlBJsvao5oEN4lPzU4CRVYghFHkdoYA/Q44ElBFVJvHFDkX0I88FNFOlByy3yA/hsHN3DfAnQHkMqyqeRWEKt18gfY/wBMq6V/L8jwftjhTAUVNqSCOhGMxalCdsoA4+IDi/cYBuPMV7nKEe455vMHbc0QkbgMm0g9CDlTDz8P6ZnFTdffnjOWXUR2EkkA/wApOG4vTfYFGRyF3EDz8/tlzuFHcpHvYP2OAE8wABqwbBZQSPbnI76U30PHkP8ATOa12dlhwBWrhgasEqaOX2SKOeL8x8JxSKZkEhYuWC1HzQHPO4emXTVyA01BSeoFivdc1mI0xwd57H5LhF3ceI+/hND2vFX1DxOKaJlYK1LvoAi/Pzyya0X44jt8u7fn7HjBtkTaY6rt0JPvxxkmOFgbC/WsVTVQOwVmkQAWWI3EeoocYaMxPs2ShmdbCj4hfHIzZiJZgJtPXMJHPUDFiXQlXU35Xf6HNQoaHIryI6HKTRGRGQcNxyRR9eby0KqXIP5Ek5B9ver++ECOOSbHt1/TKfhNSDQZD5mzWcYdVGR4Sa8wc6N6A17BNzAUVPmRR5y6vHzd11Pni/eyDhgQfOwb/XL94rfF8VCjxWOncm4h64sEUeCAb++aGn7Y7S0yrH3/AHsQAAh1NyJXoCeR9DmUCnxbj6m6rJEgPBIJPSq49OuK1fkTaez0HbnYk8kY1SPpHQKADUscvrR4AbpRI+uOyxTSEuFRVsgbqFirH6dc8Fuj4DG1HQccfXNXQ9o6mKNUi1Uqop4SUxSIvI48Q6fUZzTjsd1k3R34WD1ECuu7wbmekjVAdzepHt6nKS6bXs0iR6J2SMkPMVtf+mziOn7d0AkEx0MzTxD/AB11TSrG4U/4cfTjkjmsdXtvsjWHT/iJdWJEbvVDFe7jPBHeNpn6dL49s4alaUZYjg6IaZbcsziACe8JI/lSVh99oH9cZbtBO83wyTnehRoXcmI2tbQLJodcJ+Kjkkco0eoldnetMLQAngKpAPHnx98j8RqmSeRkYQLUbEoqkGxVDg/X/XLO08tEknB2QrHptTqXKxCFAvLEFIVCn0AGWSKGLTzrOz7mkBQRSoQrIOCT0+fBx3R9nvqIjPqv4OlFuE8XfSURyRY49AGBx1k0rxiOODTpo4m7w/wAryL12KWJsnqfFx6ZzVK6T2rP8HVToXVzz5jRmX+I6q1Ats3j6AkH64SP8cNQIW7lz4W3zEIkQU/lWTrXuDmq2k7HQu5iVxu3BWLPtFgV3amv0xKbSzvN3pnMaySK0cYgDsiFqVSQdgrz4wdZS/sLouItrNLqo5TLM8T7tzBw4IUDi26foMzZQ86howpUWpLEqm4cef8Apm9P2dA4eVu0FpXDSiWRGJjjoEVHR55qsynA1KFI1McUcj7SFDlg5JFAEc/XLUaiksdu4tWDi7NCaaXVErsOlLNwq96AxHmAGr+uTUmnO6ZCrkGgouvKzmmvYkskSyrq0QEKQkioWUE1bhGNYmdEUZymu070woBG8Y8yCDXHzyka8Jvanck6TSvYorq8YZRbWb3AjkDkmshmddtgUeoPWj88oihpkU7GCnc0PAeYBvhCuw6/PCT6SaR5ZUR+7JBASZCaNDaEbxiulZVyV7MFnYO0+nkiIlUK9hTJskMgCrwaU1Xld4vqyIajjjZEdVbcXJ7wEdRu5rBRQyN4C2oiZmCbmikdK6bdyA/0xvYNML1kjyrErpGF07FdrGxTuQKvr588ZJtRlhjKLa4BpCk+n3wKvfIaljWcsWXyZFY9fUYsrOu1WWXxWAAfEOeaquRm1pBCpinTT6Z1Me5GSTTiVWJPRGUPx98r3cs+p0zydnxwKgMjo4aaR0v4iBW3zo3eQ8TtbTWCqoppMxJXMbP3Sv3f5GZSGI9xgxHMyrK6uEJKggVZPzzc7Sk7F3NDMNZC8YB3RwM+09SN24X5YjJpOyVCsNSZB3aOdonGpI6W0VVQ86ytPUqUU2rfU06NnhmaSqUGV7o7Sb/pg2dyppSB0s0OfrhpBpS7n8cqoD4O8gmBr5DKP3HAjI1T8/Asnz+B+P651JontYNQCrbpEUiiEPBb/qqs7att3skQFdFLMxb0WhX65R/xTk3p5b46xsWr24wTGdQoYSKo+EMjD9cN/mHaHVu5fcooVysg4I+eDnfvWL7GUn/MSPYc4uzsSbO79DlSB5Eqff8A7Zku4QpEhNCyfQLzkiHV1fdkc14zsv5b6wHjHmR/v2y/fT0qtI5VfhDGwPkDmafYOAqRSJbK7EkbTUinj5NhRFCVtlk6USYrP17vE11ctrTM1nndyAMOdRIwKhtp4NxgK4+RAvOBqfuVyE26dJImVNG6owZkmWVA46bWFg/rnTafRzu7osOnYuXKwSFoETrtRXYt/wC45ePVhV2uQ7ebO1sfcm/7ZZ30k4BMbEqRWySqv1oZlOadmG4Edl+BZX1EQSQsIip6levD1+mUXRI5ATUxbv5XjdSR6+EnG4ZlV23xR9yVaNBGOUB69eMuE0jSCYambvFoAylnoL+Xm8d1nG4rFR2bqDx3kFE+As0gH6KcuOytahDiTTDaNyMsu07hzY3AZsD8BM8TSbFaPlHicgKxFWQwv9cpLotGqkNPNIGkVlBkSbxgeRK+mc3i5d/waxmrp+2tOFKRhlu63o6EnzFn++XL67fqHbQMzsQzEbnayo23ZPzzV0yRJ+Im2zDeVQfiYo0CrGtBANwNYtIdEdTFuTURSk72lhhkEPBsKVDbj980dS22rG2JiKapmkiWSFYI6O8yB9/A61WHXUaJnCLIwF1uYeEkmgAf9c0otZoZpJo2G1FEYRpIZO7mZrLKFk8XGRNB2MHgkaKJFYlT3Kx+Nm9QaYD64y1KvZxaJypoXbSb2VSisWNKBZJN7eBzix7M08rsiuokUkMt7SCLsG8YEHZyuUVpeS6QvAJYxCjNva924ked8DKarQvFGSmrlnfbGNkR3N3bNYYhS3ldcf65WFbNm7CbBKTs4IN6zqQDx40NirsEkD9cANMSSsTkyA1VEBiBbAX6Zqabs86mNlnnljCmqljayo/lDELRvmh7Yw+n1UWytZpjCxVTv0zhmJ8IBaKzz63l3qox8t8h2MwG0+oQ9OfnVffORmjZi67PCw4B546WPPNxm1EKmF37PO1WRN5lsN5XYPTF5JQk8emGl0ckjkMCHO1lrlR3d0fTg8Yyrt9jbDMGpYFakkXaeAGv744NVpJCO8i04NWSivGWPXgrx+mU1uzvVaGHu7VUaFo34ZeCQzcm/kMB3MG1zOBC6uERADbgi7vpxjXjNXG8yNBHgfiDVsBakrKaXp0VjXP0w34zWwoqpqCyh9wQTWjIAL55qug/7ZlroxM4i07FpGV3UFlUFUFnluP1xrRdhdoa9JH0kkZVWKSBJUkcsBu2hIzu5/30yE5U4Zk7FI7pYSHl7b1rj+K0yqQNlOwIB6dCRx16Zow9rwyxRxxyRp3QsNqgJW6ggLZrnk9OM860XammkkMghQsNgZyIyzA7NoXhgeLNj+uLJrNRIVB00cxAu+6JeqA6x/rg2xkk42sG1uT1TjtSV40RZnG4/wATaI03NzSkUMaEus7Jh/4mOWYu4JKsohAINxs3LH16V/by0XaMkCi01kCqxZRblUPItTJ88P8AvSKcosk6G05dyV9SdysSP1wShv8ALJWRNx2q8Xdmrqu1jqtN+HEKQkgF2TgPXRSBkaCMMkVnxO0hUX03cf2wMUcUkcsqNEzxoClOu0WOvqT6V/2wsGpCRxMy7XjJ2ij8Q8QJBrjHcYxi1AlFy3bphF1Wr00kjQKpBXaym6+fzxN4tZLtfZJGGJP8QRIoF0KF398ZMzN42I2Knekbl5N8Dn1xGYaiQAjbTUefiO4dawQjnA8nfljkUeq07Nv1UHdspG/aXfcPzRAqeR50emRFq9OxmXWL3hm575InA8XB3iNhRHqP1zO7iUkATKOCfCSL9srTxuVExuqvyPn1N47pbuWT32eDVin0OnheJJdarlywlR1UqtjhGYcjjoRjOjm0+rlJik2yxr3a9+omiN3yUYkA8c+HPNyvqd1u4Y+1V9hxhNE9apC202rWCoIJAscYk9PeLd8lI1s2sbjyaLTO/f8A8MhrSVYUdyV54qrF9OmWXtZAX/43VgbizPotOo71eAGkdn61x8P1zB1WoLysVUEdNzE8n144xRpZHFVtHohIHGJ4RTSciz1Di7RPRTdrpuX8PLq7jtlafu756BiDZr36/TFW7Xmfd3rxksbLPArNzwfErL9MxOl7rNg+Zzt0fmpPzY5aOlhEm68pGi/aDKSBIJA/BIR0N1dcsR/v3yh7RjClH0mha73bo23EnzNOBxiBcWCI46u625XeeegJN8KKynRj7AVRoc/HzDb3MaRgDgRArXy8V5za/d/iNqAw53byW3V1AexiRIPLEk+xrI4JYC6r8xvD04m3ss8247ibY81tUf0GCLs12byTXHPzziq0CpHuL5yiQpQEiq/vnGRl5IDXxz/rk4vK5DEA17jocWTsh4ptlAeb55vqOKybNg837cZZA8gpADV2L/14zmCqV3CifiHPH1ySeC7IAN3VE9fPJs0wHQ8Gs4VdLdEi/M8/plysZ2BXHJI5auR6+Qx8AyUBI8yQBVgkV9sY/Fy1VqLrkIu7165Re5C9VLAE7dpADD39MjdHREisrPylAV8zflitRfIBqLWkFQwVtz1wNpAryAw0naCxu6xpuUKNrMxsnzsD/XEY44dzKZQpA5LWvHnWcwhj5WSNtzbeC1oPUg85F0qcnc1h0drT/liUcUfExW+Kodck9ra1u8BmIBI2qu21HTYTtv55nNMgYjaCLN0WAI9stEDOzKhjU1wJHCk1zQJ4xlRprKRjUk1un1QgfVbUfTABVSPiW+CXqj+vnhhFoZjvWaRGIIjWKUGMV0Xxgv8ArmGEVpI17wEPzSmyPQEni8NFo9VqEEkALjcVWiLWvM0b/TElBRWJWM0a8WmjYHfqmQkgf8OxEZAPBpvFZ88PFo4o5N34iVEYWzI5fm+tOuYbfjtHLEhIDspCgNYXnaCch59QoRJJG2gqysCOGQ7tw8vbrnPKnOeVMG1nq17MUFpRq23sApZEXcVHIB8Y/pi4h7Y/EQRhZxF/GWSXwpCY2FBu9LBbHn6Zgydoa6ARxyOzAq7qJCrOqyqV6jkdbwC9oal1kjeaUJIAHBZijUAotRxkIaeqruUkysYRvk9VqNJ2g6NEJezWbbtSVtTo5HC8cKXcEHBRaDVrM0paAChtH4zSMykACt6yg/LgZ5+NIQgsoxIDMyFXCA9LrzygKUSFvp0Ty9emOo1Ett/semtLp8Pf90esKdpKGKBGBs2dXpZF+RDt/fKlG473Q6dxwB3c+muz1JXvCv655RthDgKdzNHsFV5++XJjVxG23fYG0bSbPlxm6ckaNChNtOX3R6A6HSsF7vQRWHYv37RqxA6bZIJaA9OMFL2e8Mpk0Wn1CuQAm3VwwqhPB/8AMZj+mYjGIM6AAspIO0BlsGviXjIWmNBSfcgKPu1DGW/v/wC+4z0ml/z+6/6N6Ts5VdGd+1JB3i/4baF+KW2BBJquljyzYi0XYmoSOObWdswhZG7xJ44zHIrUdqtpQtC68jniXqIJ30ZiLi1EilSR0ujzkqpdd6IzLxyBxzkatKc16mv4GjpdOsqX4Pbt2N+zUUurjEuqoSStDNHJqHiVCi7FMTXv5sEhh8uMn9x/s5IIWi12v70lEme4EAYguSyzRDg8+o8rzwpKg7fz3tCn4i3pXrhHh1CEB4JAQoY2pIAI4JI4yPhqvarIp0NOu6PXP+z0TPKYO1EsOwHfaaClVSDSkOh8xdennWRH+zvaniVe0ez5FQA72mm8YPoHUnj03Z5IQaslAIZDuQuu0X4V4J44yWi1aDxQzL15KsORxwcoqeojxU+yFel08ss9WdF2iPxGnGlEhQjcYWV1PQg73AB+mZk0Wtj3PJFPHsKhhIpDA8CqXji/LMIPqSUjMkxIDkpue1r/AC9cKTro0DudYsZYoCWlRA1dNx4vOuE6sH5nf/Rx+Co1FdYNNhKTRayyhwDuBK+RAYA4NjIOGI4YEXVg5mLqZ1lhM02okgEimQd7IA6A8ruB8+meh0mp/ZuaMgavtKFy6okeo7rUrGOB8Sr3m31NHLeJcfVF/wCjz6+kUHaDuIyMZFFoOOLBwZG1lYIRQ5smic2tVo+6Mfd6rRPaJIQFjtmINqhYhjVV0F3i6Q99JHBp20b6h4i/dT6eTStuSmZE7xyrGunIwx1lOSungh4Wty0ZzTN5xrVUVINYBjZ4Tb7Wce7yWt8mgWPTqT3kjVt2hhGXXcBwDw3pnImjn37BGSh2ttfj0BUg9M6I1Ys55xnD1IzrJIABJ9B1yp69G6+mah0UY5CNfkbbKNpYh+Q/dsfeifVXczCUqvFfv/Sst3YIBDqQRfBr6VjraaAclQt8WXYDn1wM8ccJUFKUqSHDFgCTQIKkisDqRXJaF5cIXZB4QrK1iyAeV+eUYFTR68jFy5SZrF8iwDV/XDvqIlKsIlYeIFWZufQ2ObxVVXc6HTd8EXkEqOWoD1xmGfRFWL6dDR8JeRgqFvIX1PzxLVmm4rabK0K+HivTN1DKCbsGSVSthFYAm/U1iUniZivmenUffIUS2aDWfQHCCJ2/IzGhdADOdyb5Z1Rglwga8hqaiPLnn7ZJlkoLdgD55VA1krfHWumWMcxJPdsL9BjcPICFICkUb5IN+fTOAIQtQ54Uk8+5AyRFL1MbV58ZzFd4HJAoUOvyGG5i8KEkSMSI1YbzW7j5DBSMXcndfofOvIYWeS2AC7QBXF3z64D6YFdmJDEG/PDSRuUSQLakAEqCQD5g4DGdNIxIQEjnctHowHBPlmbsYXALGr6An7YZV7twQTtqmNHw3xzYxyaTTpUsmmrUuTfdMqRqKADKlHk+eK6eWRHNhWSThw4sUTyfTF33yaxoR6QSBQksKShN0qzLsZgwrcq3Zw+m0UB1B03ezwyrEO8fRsWiNeIs8j/2GPfh9OiJIujTcsYYswDbU21VsTxi+q7RKDuIigkBjR9i8KinftWjXpeee9TKq9sENtMPWNH+IcRNI0aMVR5HLs9E+K+OvXGtIg7kSSqxS2PCq48PNqrMDY9sjWazdKxWKMFlG2QAlxwAeW+2Am1Kv4TFEjR7djRAhiVoEOSTedsbuKVjWsdOyyMEIG8KSJAbEtksG8XPOKDjy48/9M1+z9BBO0S6pyryAGNFY3tJ4LV+nOazdj6GFdzRpwWLFg7AAEC+L98hU1cKT2u46pya3WI7Kj/aPtSOT93wxtFAERmk0+jVAa8KB3TkgdeT79edT9y/t020NptMQtAfwezzQHkPBmYU7KjZAjEgiggV4yD6bQQPlhwukJZRA4KVY77UKSD0P+JX6Z5866buons0dXSUEqiuwHaPZn7RQavsmLVwaddRqZmj0KCLTbHk3DcGVF2kcjqM1Y+w/wBtIw3d9n6IX8e3RaLn7RVmB2qtJBqII5IhCzBmeWZrLCwULMaIo9KzV040/wCGgkmbWg90rSSfi5qJCBiaV8edVKnGXv8AL+wU9VSUpO3I4exP216/u/Q3VcaPRA/pHlJOxv2wZxJL2V2c7hNgaTS6VvDVVW2v0ysZjeMSQtrJEYEo6a3VUxABI4Y9L5xbUaiKAL3s2rj7xmRZBrp3WNq43gG69chGtulZL7f2Wes0/dfb+yZ+xP2jlI73srs8kChUEK//AM1lYuzP2i09mLsnQr6kRx8/+7PPy9odoAzBNXqWZZmC7ZndO7AJJsm/LBDtXtIKD+L1PWhTuAPnznoKjUsDx2k7xf0PRP2b28XMr9h6N3Lcv3S3df5Xzjof2gXvNvYMI70AShFlAkUdAwWWs86O2O16bbq9Rx/6kg6mv5s04e0u1DCkg1+t3Sy90irrZY0jpbLuTZocdf8A5zp1I8ger0kv2v6IY/B9rorR/uCIIxtlVdRRNVfE2DOm7U2GM9ghkNUhXWEcdNo73BajtftVZxDDru0SqglpJNS/jH8yqfL055xSLtntd5kSTtHUKm+mZnc0vmcZQqPIr1Oj4s/oiNMmoZ5po+zzON5G9F1FRNXMamNwOldbw0o1cq7ZeypCoAA3HWnobFbnOIx9o9oaUPDBO8cZcuVRuN5ABN18st++e1v/AMmQ8+ZykoTb/shRr6VQSne/8IMJBCyRHSvCzjanM7Mu7zWOVipvz4w0cbuP4k+nBDq8TRxISL8ADXQ9q55zPm7Q12oKd5JuKbqJADAMKIBq80NIQmn1Q77uIxGvfb4hPG29+Nsb8Aj2wyuo5OKtKE53p8fT8DDaWZpPHKjv3lf4bk3GK2qFfqKOROe0E23HJJTMQ5kmVwvHBsni/Q5TSvMJli0uofZ3kbwP3aA0UZSzAkKLHxHy+eegmk0Gmg2/iZe0dQVY2jqY0eh4Cr7V2/8AUfO85Z1ZwklhghDcnmx5YtMXj7+PVpGWawd0oIJsnaT8vtgZNRG0yBI2jkqMB2bo1UTtFcHGTH2gdR+J36dJGa3BcMNoN7dqA8VxjOtnA0zKp0ayqqFmSNlkdORf8ShZ8uM6OtlJZIWFe/aWlGo7vuWRgN0tVwCQNxFfXHF1quRGDCrlygfvZAh29Wp+K+vnmJF3YNSjch22wZlC2N3VfPyx2HT6KSNZafZ4mKM4IB6c0LylSpsWSfShJ5Rpa2TuIN6ODICtuym6PWgeP1zF1MwcuCBZO/zsH1FYbUFAkaRFu5YNtotTc9Luq6YlMgCRuAynkc8dBwQTiU85ZeeFZFGIZg207bq1JPv1PnkPdmq2k2Pkeh5ziQ3d2QR0NXQ98ob5FdLH0OdBE5TTDcfDfi8+McSVDt/hgAXsO0C+ffjEcNFuJH8oIsXXlgmroaLyOM72bSxxV1Q+gyO8bnmIEGqNivouDeQcqeaNgpdH2JJyiklbthz05Pl1yCiWc/YBHy6Lxyw5JofXyzXEE8lFZRsBoGKOxxxwcz/wbBiskkSAEAG7s/IY6O5jjAuSZt4AK+FSB51Z6fLBWle21kowbCjSofjkkPXruA4/5cpOunhiLptBclSUQBvnZBP65QSdoFo6jpAaCVtteeoPP64c2VIjhFrSkll2jk3xRyCUk8sooKxjHe56swuvfKFSCbB4NH5+mbaQzglgEUAjxCvLrQAHX54Q6XTtGu4KxW+XIsWb45/rnV10uwOk/cwKJs88ZaMsrg0aHiI6dM1VeAgpCsa0aZloMebNuyk/LGkiDSFU2SMwDORDSlhyviI5+uZ1vkZU78GNINRqGX+HIzIArHab68Fj0zodJqmIYIyIAWMkgZUUA1ya65uTLOzpJJNK+9wNiUqsyqfyRgdK8+OPuGXT6nUg95qZSp8Q3UwJI8PC3gVVtWM6TQbTh3jkhbtKJXAUllR2UJW49MU1C9mxyd6zyTEhWBW0jk8vCPiGTp9A0LoVuXdwVVwoIuirWDmqgjeMCSDTKwCle7HjAs8Mzrf0GcvoldP8FYwuhSOLsKaPSySFyGkcsHkVdoYhyaHkOfvjhi7GWOaTRQFyrAq/deJQ1jebs9emEj/DR7BGiJvAJSOJDwLJsmvLCprNSVjRVSixfa1d2pHRqQDgel/bOeacny/qVVNd/wAGXFHDDJJqzMZJUV2KKGdwxrxSkj71jel1Wt7+TVamKVtPMh3LsoRHqAR8Rb5X1x+PVSKGcLDe8VYfxH0FkWPkcOuoBSZ1ZUUFOJZFMrNXi7tast9PPBN7l5lcZU+1y3d7tOJBG6bgbJR2KnmwyL4vlmW/Z8z6iHUbdSXjmRml1IRFmUJQDBjuvpXH/bSfVdwsrsGgUMpBc+Jw3FKo9PPnrkJ2hpSu1lec7QQZBIdo+ImgQa/2M5aa6d7BcYcGV2/Iv4CRF0ggImj3Sb5ZBIdrCgxqPj0F4y37vjigGo0+oaH8PAr2rshpNrKWC3ZNeX380u39Xp5tH3SRTJN+IBbeoSPZRCqoJLffnNSPtGKKOGPvFRmjWMTBx3oBHIQMaHsKzr6f6SS+ZOLSk8mPPqu1JpmlhiiaOEMsMEbBY1BoBI4dNtNjr53540sH4rTQfjCVgBSViyNulkSNiYwoN2SauwB647+OjimDI0uyRCqyrHHQZepbu6F+nPn7ZUazTuzh55AjMSdyqm1iNoElGgBXPP09NKWFZWsZRXdnmn7MU953epjbks4CSDbQIIUxqUPUAUcr+5u1FLIqqa3d4iSRuU2ru8YU8eX3+g9DNL2ZLFIgk08rMVcji2UA8DaQ1/fLRns6WPcyIYoQjqN4F31B5sm+M6PEzSJ9ONzzg7J1axHvAsBbYGOoO2y3iFjqAOpNenrhY9MujZCJ4iZlKmWxsijK15MRuJ6DnjN7vNE6TFpSwkQUiE7GIYABybbjr1wDaLsaQOUhia+Czkito2qzAOPPrxgWocsS/BukuxmR6GBxIRM0kSeN23rEsnQ7V3W+4/CoCnrZrFX0BhT8WXQRuD3a7lPJBJF7ifD0989Ii6VIBp4VGw7laOMIFLNRYEt4uenXz98ze0dDo4dFPKkXduOAGY3GGkAKkWb+wAx6dZt2uLKngxhopZR3sckLkje6q7XGD/PYrj83ODbRTo4UoSpNhk5BF/lPnmzpIOzJ9Jp5G3KYVRWczEW7nxKiEVd49+H04UFpEEcRKgMyEhXB3AbB09cpKu07f8Cxp3yeW/DyAtxzbLypUdA3F/phVcxBSiqyRqGa03KzNQKtvHNH2z02zTqNyyyWQ9btskVcUDYJ/wB/YL6SEMP4rruXnYm6Oz+UqDR8q/pg6+7DQ3SfYxC5M8EibmQBUYiwA3WgfTnIi1E/eBjdh6YeRRT4uD9s110aQoyrqFWQP8SRIGsWSApPl55dNJDGx71+9IjIYNEO8UcdWA/pgdSPsZU2JDWSNEkixOFaTZ4FVQR/NxziurvUbGjjawwDOfjYAX0Ppmo+j05jCLKNoO4rtIJsclenP08sXOh2ASLqZQPJaDENwOeP91iU9qd0Z03bJkCHUyblIIVWVmscc+EGxjAkbTqFENbgodgGssPDVtxWPdzq0NRamNkVQ+wgFhZ6FWFe/BOUeLVkAyakbzuNbVZTzXAyznu54FVNiZSQ+ORm7oHfHuvYDx5evFHjIVoJ2dTx4rUE8EGxS3jEmn1sjAbw3RVsGMWKoE+uLNpdUGsot9aV1Bv540TNMXaF1LbQaBYWfUcdclIyULEeE0Nw6WD54bvtUgKs/JIJHhY/TJE5Zh3lKVbjwnaSf5gOcfdIRJAX07EyFQfC3I/5uhGE0+nkYruBCsCPOuLNmva8NLI4YmNbJRN4AsUvT/ftghqNQYwhRrF9AaI9M26TRRKKYGdzbpdqGJAPUfX1wQY7QB1HmOD9awjbXvd4XBO4tZJY9byO6dSQrdOt+E/rjppIi8sdg08TIrvuY7iKZuPTyxssFLMES1CqpIJIBYihZzs7OSs8ovTATavUJLQKkMQCCL8745wmmCtIjsLdhZa2u+vrWdnYLJIMeRjV7/CokdVNjapAH9LwCxJGWiHiUgsS9Fia6k1nZ2aPpHfJMW1QKRPhVvhHU+fGGYuyqS7cA0OK569BnZ2F8m7Fof8AEjTnay72osLPXmjhXHdlWUkWQlXQoqSarOzsXuP2KWVYlPCXjZmKgAk9OcPDyAb52rz58keZzs7FkZBtgVpCrNwtVfBBNG8pP4VfbxUd8Ei9yhiD51nZ2SHONKunpRbkEnm/PzvDIgBU21lQW5+K+ec7OwvgCMzXzTSqiM57syFO7WlQBRuHw8/riKTzMxXdQFsK8mY0SLzs7LUUtiOSfqLCV5nh077TEbsUL4B88FFNMndhWoOX4IU7QAKC7gazs7LxWDSI1Oq1EYWNGoPuZqvnn7eXpgU1E0isrm1CsSK4J4POdnYySsTkyyTyK0gTapXgMFG7nz3Hm8rJLKhQKxFswNdeCADnZ2ZJXD2Oj1OpG5BIQOeR1++XTV6jcHLAmQ01ix8xnZ2CSRrjMcriSRuLcgnjgEkXQy8s8phk5Gxl2tHzsNn0Pp5Z2dkmuBr4ENJK4YpSlKNoRan5400r7lQUFlRtyiwBx5Z2dlp8gi8E6aWT+Gl+EEVflRxwTSFOdp4N2Otc52dkpJFIPBaGWRw+4g7S1cVVAV0whZtsbkkuoARj1UA9AeudnZNlYll8cTXwY3i2kAWd5N2evywbIyzMRLLu2qwbdyOOgNXWdnZkFg5IgAxLOSQRZI469KGRET3UbkknavB6dfbn9c7OxnwIuTnd0JKnldrfPkD/AHVZaaIJEkm52LMPC5DKtnoti/1zs7MMhaR3cOSRaMoFKosE/m45yisGatiDf8RUUeDXGdnZRE2RJaWwJJDgDdzXNZU7i7AsfDQBFDjr5DOzsbuYhQB3nAO1qG4Anr6nnLsTLtMu1yBQLKpNfOs7OwMx/9k=")

  return (
    
      /* <h1 className='text-3xl  bg-green-500  p-3 rounded-md'> hello vite</h1>
      <Card/>
      <Card username="gupta" myarr={[1,3,4,5,6]}/>
      <Card username="bhadhoria"/> */

      <div className="w-full mt-11  min-h-screen  flex items-start">
         <div className=" relative w-1/2 h-full flex flex-col ">
          <div className='absolute top-[10%] left-[8%] flex flex-col z-10' >
            <h1 className= 'text-4xl  text-white font-extrabold my-5  ' > JOB sequeers the queue for geeting the job</h1>
             <p className='text-2xl font-semibold text-white my-5 '> Start searching for free and get exciting benefits</p>


          </div>
          <img src={count} alt=""  className='w-full  min-h-screen object-cover'/>
            

         </div>
         <div className="w-1/2 h-full bg-white flex flex-col p-14 space-y-[40px] ">
           <div className="w-full flex">
           <img className='w-[120px] relative right-11 bottom-5' src="https://th.bing.com/th/id/OIP.MtQR7UJIbKa2NAhrc2ebsQHaEc?w=313&h=188&c=7&r=0&o=5&pid=1.7" alt="" /> 
            <h1 className="relative right-11 text-black font-semibold text-xl  "> Spartons together</h1>
           
           </div>

            <div className="flex flex-col  ">
              <div classname="w-full flex flex-col ">
              

                  <h3 className='text-3xl font-semibold mb-2'> Login</h3>
                  <p className="text-base  mb-2"> Welcome back! please enter your detail</p>
              </div>
              <div className="w-full flex flex-col">
                <input
                 type="email"
                 placeholder="Email"
                 className='w-full text-black py-4  my-2 bg-none border-b border-black outline-none focus:outline-none'
                />
                <input
                 type="password"
                 placeholder="Password"
                 className='w-full text-black py-4  my-2 bg-none border-b border-black outline-none focus:outline-none'
                />
              </div>
              <div className="w-full mt-4">
              <button className="w-full text-white bg-black rounded-md p-4 font-semibold"> Log in</button>
              </div>
              <div className=" text-black mt-6 text-center ">
                <p> Don"t have a account?</p><span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up for free</span>
              </div>
            </div>
            
         </div>


      </div>
    

      
  )
}

export default LogIn
