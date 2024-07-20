import React, { ReactElement, forwardRef,  useRef, } from 'react';
import Animated from 'react-native-reanimated';
import { Layout } from '@ui-kitten/components';
import {CellContainer, FlashList} from '@shopify/flash-list';
import InputBox from './components/InputBox';
import useChatRoomViewModels from './viewModel';
import ChatMessage from './ChatMessage';
type ChatRoomProps = {
};

const ChatRoom = (): ReactElement => {
  const {messages,user}=useChatRoomViewModels()
  
  const AnimatedCellContainer = Animated.createAnimatedComponent(CellContainer);
  const flatListRef:any = useRef(null);
  function handleScrollToEnd(width:number, height:number) {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({offset: height});
    }
  }



  return (
    <Layout level='2' style={{width: '100%', height: '100%'}}>
      <FlashList
        ref={flatListRef}
        data={messages}
        renderItem={({item}) => <ChatMessage myId={user?.nom} message={item} />}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={200}
        CellRendererComponent={forwardRef((props, ref) => {
          return <AnimatedCellContainer innerRef={ref} {...props} />;
        })}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={handleScrollToEnd}
      />

      <InputBox/>
    </Layout>
  );
};

export default ChatRoom;