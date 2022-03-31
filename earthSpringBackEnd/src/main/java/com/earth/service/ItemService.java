package com.earth.service;

import com.earth.entity.Item;
import com.earth.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    @Autowired

    public ItemRepository itemRepository;

    public List<Item> listAllItems() {
        return itemRepository.findAll();
    }
}
