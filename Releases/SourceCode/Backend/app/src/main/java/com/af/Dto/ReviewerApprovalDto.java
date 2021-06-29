package com.af.Dto;

public class ReviewerApprovalDto {

    private String id;
    private String approval;

    public ReviewerApprovalDto(String id, String approval) {
        this.id = id;
        this.approval = approval;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getApproval() {
        return approval;
    }

    public void setApproval(String approval) {
        this.approval = approval;
    }
}
