package com.mmc.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by SGaurav on 09/12/2016.
 */
@Entity(name = "com.mmc.entity.NotificationEntity")
@Table(name = "notification")
public class NotificationEntity implements Serializable{

    private static final long serialVersionUID = -529707323874505161L;

    @Id
    @Column(name="notification_id")
    private int id;

    @Column(name="notification_title")
    private String title;

    @Column(name="notification_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    @Column(name="notification_dec")
    private String description;

    @Column(name="notification_url")
    private String url;

    public NotificationEntity() {
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "NotificationEntity{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", date=" + date +
                ", description='" + description + '\'' +
                ", url='" + url + '\'' +
                '}';
    }
}
