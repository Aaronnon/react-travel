import React from 'react';
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'
import styles from './SideMenu.module.css';
import { sideMenuList } from './mockup';

export const SideMenu: React.FC = () => {
    return (
        <Menu mode='vertical' className={styles['side-menu']}>
            {sideMenuList.map((item, index) => (
                <Menu.SubMenu
                    key={`side-menu-${index}`}
                    title={<span><GifOutlined />{item.title}</span>}
                >
                    {item.subMenu.map((_item, _index) => (
                        <Menu.SubMenu
                            key={`side-menu-${index}-sub-menu-${_index}`}
                            title={<span><GifOutlined />{_item.title}</span>}
                        >
                            {_item.subMenu.map((__item,__index)=>(
                                <Menu.Item
                                key={`side-menu-${index}-sub-menu-${_index}-sub-sub-${__index}`}>
                                <span><GifOutlined />{__item}</span>
                                </Menu.Item>
                            ))}
                        </Menu.SubMenu>
                    ))}
                </Menu.SubMenu>
            ))
            }
        </Menu >
    )
}