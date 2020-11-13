import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";
import Hero from './components/Hero/Hero.jsx';
import ProductShow from "./components/productShow/productShow.jsx";
import Image from './components/Image/image.jsx';
import RedirectBannerCta from './components/Redirect/redirectBannerCta.jsx';
import {ShopAll} from './components/shopAll/shopAll.jsx';

import { hero as DbHero, themes as DbThemes } from '../datas/bitMen';

import '../App.scss';

const HKBitMen = () => (
    <article className="App">
        <Hero 
            {...{   
                    banner: {
                        mobile: DbHero.image.mobile, 
                        desktop: DbHero.image.desktop,
                    },
                    title: DbHero.title,
                    content: DbHero.content
                }
            }
        />
        
    </article>
);

export default HKBitMen;

/**
 * 
 
<main className="main">
            <ProductShow 
                title="机能主义大行其道" 
                content="功能元素在本季男装造型中依旧“挑大梁”，各大品牌对于搭配场景与穿着体验投入了更多关注。尺寸各异的多口袋设计方便实用，结合利落剪裁更丰富了整体视觉效果，达到时髦与实用的双赢，呈现多面绅士风格。"
                scrollMagicItems={[{
                    triggerElement: 'sm1_1',
                    children:(<Image image={{mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543354896207.jpg', desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543337675609.jpg'}}/>),
                    from: {rotation:3, marginLeft:10, marginRight: 10},
                    to: {rotation:0},
                    duration: '300'
                },
                {
                    triggerElement: 'sm1_2',
                    children:(<Image image={{mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543343879889.jpg', desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543335755485.jpg'}}/>),
                    from: {rotation:10, marginLeft:10, marginRight: 10},
                    to: {rotation:0},
                    duration: '300'
                }]}
                photosTags={['STONE ISLAND']}
                triggerHook="onLeave"
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'JUUOC839P61MFSVX',
                            name: '饰口袋连帽风衣',
                            brand: 'JUUN.J',
                        },
                        {
                            sku: 'QJXJK601933MFBKX',
                            name: '饰扣带多口袋设计夹克',
                            brand: 'MCQ',
                        },
                        {
                            sku: 'OFWJKPAJK10MCBKX',
                            name: 'Logo 缝饰配口袋夹克',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        },
                        {
                            sku: 'LAVVCTAW202MFGRX',
                            name: '口袋装饰绗缝马甲',
                            brand: 'LAVENHAM',
                        }
                    ]
                }}
            />
            {DbThemes.map((index) => (
                <ProductShow 
                    {...{
                        DbThemes
                    }}
                    title 
                    content="持久耐穿的跨季单品越来越受到理性消费者的欢迎，而针织开衫凭借其百搭属性及叠穿魅力，一路从春夏挺进秋冬。传统技艺及简约色系的运用平衡了怀旧感与摩登气质，令整体设计透露着慵懒儒雅的味道。"
                    scrollMagicItems={[{
                        triggerElement: 'sm2_1',
                        children:(<Image image={{ desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543328404636.jpg', mobile:'//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543354319192.jpg'}}/>),
                        from: {rotation:3, marginLeft:10, marginRight: 10},
                        to: {rotation:0},
                        duration: 300,
                    },
                    {
                        triggerElement: 'sm2_2',
                        children:(<Image image={{ desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543331884414.jpg', mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543357636988.jpg'}}/>),
                        from: {rotation:-10, marginLeft:10, marginRight: 10},
                        to: {rotation:0},
                        duration: 300,
                    }]}
                    photosTags={['toga archives', 'Comme des Garçons HOMME PLUS']}
                    products={{
                        shopUrl: "https://cn.iteshop.com/b_it/item/",
                        imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                        imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                        lists: [
                            {
                                sku: 'OFWCDSR0816MFBGX',
                                name: '饰飘带针织开衫',
                                brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                            },
                            {
                                sku: 'CPXCDAZN058X7NYX',
                                name: '爱心缝饰开衫',
                                brand: 'Play Comme des Garçons',
                            },
                            {
                                sku: 'ANXCD0092KAMEORX',
                                name: '系扣针织开衫',
                                brand: 'Acne Studios',
                            },
                            {
                                sku: 'QJXCD603760MFBLZ',
                                name: '花朵嵌花针织开衫',
                                brand: 'MCQ',
                            }
                        ]
                    }}
                />
            )}
            
            <ShopAll 
                cta={{
                    link: "https://cn.iteshop.com/b_it/OCT-EDITORIAL-M",
                    content: '选购全部'
                }}
            />  
            <RedirectBannerCta media={(
            <Image image={{mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031858095676233.jpg', desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543327949683.jpg'}}/> 
            )} 
            desc={{
                titles: ['风格盛宴', '直击 2020 秋冬潮流趋势'],
                content: '探寻潮流与生活的更多可能。'
            }}
            cta={{
                link: 'https://cn.iteshop.com/b_it/landingPage/october-fw20-w',
                content: '探索女士'
            }}
            />
        </main>


 * 
 */
