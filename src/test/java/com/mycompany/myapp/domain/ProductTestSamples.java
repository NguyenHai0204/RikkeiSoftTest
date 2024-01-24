package com.mycompany.myapp.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class ProductTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Product getProductSample1() {
        return new Product().id(1L).productId(1L).productName("productName1").stockQuantity(1L).categoryId(1L);
    }

    public static Product getProductSample2() {
        return new Product().id(2L).productId(2L).productName("productName2").stockQuantity(2L).categoryId(2L);
    }

    public static Product getProductRandomSampleGenerator() {
        return new Product()
            .id(longCount.incrementAndGet())
            .productId(longCount.incrementAndGet())
            .productName(UUID.randomUUID().toString())
            .stockQuantity(longCount.incrementAndGet())
            .categoryId(longCount.incrementAndGet());
    }
}
