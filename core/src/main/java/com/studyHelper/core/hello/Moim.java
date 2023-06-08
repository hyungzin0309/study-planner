package com.studyHelper.core.hello;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class Moim {

    private int requestMaxNum;
    private int enterRequest;

    public boolean isRequestFull(){
        if(enterRequest < requestMaxNum){
            return false;
        }
        if(requestMaxNum == 0) {
            return false;
        }
        return true;
    }

}
