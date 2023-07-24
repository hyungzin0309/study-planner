package com.studyHelper.application.Exception;

public class ForbiddenException extends RuntimeException{

    public ForbiddenException(String message, Exception e){
        super(message, e);
    }

    public ForbiddenException(Exception e){
        super(e);
    }

    public ForbiddenException(String message){
        super(message);
    }
}
