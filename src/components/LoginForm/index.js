import React,{useRef,useState} from 'react'
import styles from './index.css'

import { Button, Tooltip,Typography } from 'antd';
import { SearchOutlined,FastBackwardOutlined } from '@ant-design/icons';
const { Title,Paragraph } = Typography;


export default function index(props) {
    console.log(props);
    const [txt,setTxt] = useState('可编辑内容')
    const txtLoginId = useRef();
    const txtLoginPwd = useRef();
    return (
        <div className={styles.login}>
            <div className={styles.item}>
                <label>账号：</label>
                <input ref={txtLoginId} type="text"/>
            </div>
            <div className={styles.item}>
                <label>密码：</label>
                <input ref={txtLoginPwd} type="text"/>
            </div>
            <div className={styles.item}>
                <button onClick={() => {
                    var loginId = txtLoginId.current.value;
                    var loginPwd = txtLoginPwd.current.value;
                    console.log(loginId,loginPwd);
                    props.onLogin && props.onLogin(loginId,loginPwd);
                }}>登录</button>
            </div>
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="link">Link</Button>
                {/* <Button type="primary" icon={<SearchOutlined />}>
                Search
                </Button> */}
                {/* <LeftOutlined /> */}
                {/* <StepBackwardOutlined /> */}
                <SearchOutlined style={{color:'red'}}/>
                <FastBackwardOutlined />
            </div>
            <div>
                <Tooltip title="search">
                <Button type="primary" shape="circle" icon='fast-backward' />
                </Tooltip>
                <Button type="primary" shape="circle">
                A
                </Button>
                <Button type="primary">
                <SearchOutlined />
                Search
                </Button>
                <Tooltip title="search">
                <Button shape="circle"><SearchOutlined /></Button>
                </Tooltip>
                <Button><SearchOutlined />Search</Button>
                <Button loading={true}>Search</Button>
               
            </div>
            <div>
                <Title>h1. Ant Design</Title>
                <Title level={2}>h2. Ant Design</Title>
                <Title level={3}>h3. 点击下面的内容是可以编辑的</Title>
                <Paragraph editable={{onChange:(newTxt) => {
                    setTxt(newTxt);
                }}}>{txt}</Paragraph>

            </div>
        </div>
    )
}
