package com.earth.entity;

import javax.persistence.*;

@Entity
@Table(name = "item")
public class Item {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    @Column(name = "item")
    private String item;

//    TO Do change item to item Name throughout all app

    public Item(int id, String item) {
        this.id = id;
        this.item = item;
    }

    public Item() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }


}
